using System.Diagnostics;
using EmployeeAttendanceMVC.Data;
using EmployeeAttendanceMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAttendanceMVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;

        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: / — a small dashboard with headline counts.
        public async Task<IActionResult> Index()
        {
            ViewBag.EmployeeCount = await _context.Employees.CountAsync();
            ViewBag.AttendanceCount = await _context.Attendances.CountAsync();
            ViewBag.TodayCount = await _context.Attendances.CountAsync(a => a.Date.Date == DateTime.Today);
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

    public class ErrorViewModel
    {
        public string? RequestId { get; set; }
        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}
