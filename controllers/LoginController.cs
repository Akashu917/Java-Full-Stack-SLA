using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Linq;
using System.Web.Mvc;
using System.Web.Security;
using StudentManagementMVC.Data;

namespace StudentManagementMVC.Controllers
{
    public class AccountController : Controller
    {
        private StudentDbContext db = new StudentDbContext();

        // GET: Account/Login
        public ActionResult Login()
        {
            return View();
        }

        // POST: Account/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(string username, string password)
        {
            var user = db.AdminUsers.FirstOrDefault(
                x => x.Username == username &&
                     x.Password == password);

            if (user != null)
            {
                FormsAuthentication.SetAuthCookie(
                    user.Username,
                    false);

                return RedirectToAction(
                    "Index",
                    "Student");
            }

            ViewBag.Error = "Invalid username or password";

            return View();
        }

        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();

            return RedirectToAction("Login");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
                db.Dispose();

            base.Dispose(disposing);
        }
    }
}