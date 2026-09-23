using EmployeeAttendanceMVC.Data;
using EmployeeAttendanceMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAttendanceMVC.Controllers
{
    public class EmployeesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public EmployeesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Employees
        // Supports an optional search term against name/department for convenience.
        public async Task<IActionResult> Index(string? searchTerm)
        {
            var employees = _context.Employees.AsQueryable();

            if (!string.IsNullOrWhiteSpace(searchTerm))
            {
                employees = employees.Where(e =>
                    e.Name.Contains(searchTerm) || e.Department.Contains(searchTerm));
            }

            ViewData["CurrentFilter"] = searchTerm;
            return View(await employees.OrderBy(e => e.Name).ToListAsync());
        }

        // GET: Employees/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null) return NotFound();

            var employee = await _context.Employees
                .Include(e => e.Attendances)
                .FirstOrDefaultAsync(m => m.EmployeeId == id);

            if (employee == null) return NotFound();

            return View(employee);
        }

        // GET: Employees/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Employees/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Name,Email,Department")] Employee employee)
        {
            // Server-side check for duplicate email beyond the DB unique index,
            // so we can show a friendly validation message instead of a DB exception.
            if (await _context.Employees.AnyAsync(e => e.Email == employee.Email))
            {
                ModelState.AddModelError("Email", "An employee with this email already exists.");
            }

            if (ModelState.IsValid)
            {
                _context.Add(employee);
                await _context.SaveChangesAsync();
                TempData["SuccessMessage"] = $"Employee '{employee.Name}' created successfully.";
                return RedirectToAction(nameof(Index));
            }
            return View(employee);
        }

        // GET: Employees/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var employee = await _context.Employees.FindAsync(id);
            if (employee == null) return NotFound();

            return View(employee);
        }

        // POST: Employees/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("EmployeeId,Name,Email,Department")] Employee employee)
        {
            if (id != employee.EmployeeId) return NotFound();

            if (await _context.Employees.AnyAsync(e => e.Email == employee.Email && e.EmployeeId != id))
            {
                ModelState.AddModelError("Email", "Another employee already uses this email.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(employee);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = $"Employee '{employee.Name}' updated successfully.";
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EmployeeExists(employee.EmployeeId)) return NotFound();
                    throw;
                }
                return RedirectToAction(nameof(Index));
            }
            return View(employee);
        }

        // GET: Employees/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null) return NotFound();

            var employee = await _context.Employees
                .Include(e => e.Attendances)
                .FirstOrDefaultAsync(m => m.EmployeeId == id);

            if (employee == null) return NotFound();

            return View(employee);
        }

        // POST: Employees/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var employee = await _context.Employees
                .Include(e => e.Attendances)
                .FirstOrDefaultAsync(e => e.EmployeeId == id);

            if (employee == null) return NotFound();

            // Prevent deleting an employee who still has attendance history,
            // since Attendance.EmployeeId is a required foreign key.
            if (employee.Attendances != null && employee.Attendances.Any())
            {
                TempData["ErrorMessage"] =
                    "Cannot delete this employee because attendance records exist. Delete their attendance records first.";
                return RedirectToAction(nameof(Index));
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
            TempData["SuccessMessage"] = "Employee deleted successfully.";
            return RedirectToAction(nameof(Index));
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.EmployeeId == id);
        }
    }
}
