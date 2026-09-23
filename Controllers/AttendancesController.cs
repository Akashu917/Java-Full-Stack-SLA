using EmployeeAttendanceMVC.Data;
using EmployeeAttendanceMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAttendanceMVC.Controllers
{
    public class AttendancesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AttendancesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Attendances
        // Eager-loads the related Employee so the grid can show the name, not just the FK.
        public async Task<IActionResult> Index()
        {
            var attendances = _context.Attendances
                .Include(a => a.Employee)
                .OrderByDescending(a => a.Date);

            return View(await attendances.ToListAsync());
        }

        // GET: Attendances/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null) return NotFound();

            var attendance = await _context.Attendances
                .Include(a => a.Employee)
                .FirstOrDefaultAsync(m => m.AttendanceId == id);

            if (attendance == null) return NotFound();

            return View(attendance);
        }

        // GET: Attendances/Create
        public IActionResult Create()
        {
            PopulateEmployeeDropdown();
            var attendance = new Attendance { Date = DateTime.Today };
            return View(attendance);
        }

        // POST: Attendances/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(
            [Bind("EmployeeId,Date,CheckInTime,CheckOutTime")] Attendance attendance)
        {
            // Prevent duplicate attendance entries for the same employee/day.
            bool duplicate = await _context.Attendances.AnyAsync(a =>
                a.EmployeeId == attendance.EmployeeId && a.Date.Date == attendance.Date.Date);

            if (duplicate)
            {
                ModelState.AddModelError("Date", "An attendance record already exists for this employee on this date.");
            }

            if (ModelState.IsValid)
            {
                _context.Add(attendance);
                await _context.SaveChangesAsync();
                TempData["SuccessMessage"] = "Attendance record created successfully.";
                return RedirectToAction(nameof(Index));
            }

            PopulateEmployeeDropdown(attendance.EmployeeId);
            return View(attendance);
        }

        // GET: Attendances/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var attendance = await _context.Attendances.FindAsync(id);
            if (attendance == null) return NotFound();

            PopulateEmployeeDropdown(attendance.EmployeeId);
            return View(attendance);
        }

        // POST: Attendances/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(
            int id, [Bind("AttendanceId,EmployeeId,Date,CheckInTime,CheckOutTime")] Attendance attendance)
        {
            if (id != attendance.AttendanceId) return NotFound();

            bool duplicate = await _context.Attendances.AnyAsync(a =>
                a.EmployeeId == attendance.EmployeeId &&
                a.Date.Date == attendance.Date.Date &&
                a.AttendanceId != id);

            if (duplicate)
            {
                ModelState.AddModelError("Date", "An attendance record already exists for this employee on this date.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(attendance);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Attendance record updated successfully.";
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AttendanceExists(attendance.AttendanceId)) return NotFound();
                    throw;
                }
                return RedirectToAction(nameof(Index));
            }

            PopulateEmployeeDropdown(attendance.EmployeeId);
            return View(attendance);
        }

        // GET: Attendances/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null) return NotFound();

            var attendance = await _context.Attendances
                .Include(a => a.Employee)
                .FirstOrDefaultAsync(m => m.AttendanceId == id);

            if (attendance == null) return NotFound();

            return View(attendance);
        }

        // POST: Attendances/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var attendance = await _context.Attendances.FindAsync(id);
            if (attendance != null)
            {
                _context.Attendances.Remove(attendance);
                await _context.SaveChangesAsync();
                TempData["SuccessMessage"] = "Attendance record deleted successfully.";
            }
            return RedirectToAction(nameof(Index));
        }

        private bool AttendanceExists(int id)
        {
            return _context.Attendances.Any(e => e.AttendanceId == id);
        }

        // Builds the Employee dropdown list used by Create/Edit views.
        private void PopulateEmployeeDropdown(object? selectedEmployee = null)
        {
            var employeesQuery = _context.Employees.OrderBy(e => e.Name)
                .Select(e => new { e.EmployeeId, Display = e.Name + " (" + e.Department + ")" });

            ViewBag.EmployeeId = new SelectList(employeesQuery.ToList(), "EmployeeId", "Display", selectedEmployee);
        }
    }
}
