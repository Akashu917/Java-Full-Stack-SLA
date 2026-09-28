using System.Linq;
using System.Net;
using System.Web.Mvc;
using StudentManagementMVC.Data;
using StudentManagementMVC.Models;

namespace StudentManagementMVC.Controllers
{
    [Authorize]
    public class StudentController : Controller
    {
        private StudentDbContext db = new StudentDbContext();

        // GET: Student
        public ActionResult Index(string search)
        {
            var students = db.Student.AsQueryable();

            if (!string.IsNullOrEmpty(search))
            {
                students = students.Where(s =>
                    s.Name.Contains(search) ||
                    s.Email.Contains(search) ||
                    s.Department.Contains(search));
            }

            return View(students.ToList());
        }

        // GET: Student/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            Student student = db.Student.Find(id);

            if (student == null)
                return HttpNotFound();

            return View(student);
        }

        // GET: Student/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Student/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Student student)
        {
            if (ModelState.IsValid)
            {
                db.Student.Add(student);
                db.SaveChanges();

                TempData["Success"] = "Student added successfully.";

                return RedirectToAction("Index");
            }

            return View(student);
        }

        // GET: Student/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            Student student = db.Student.Find(id);

            if (student == null)
                return HttpNotFound();

            return View(student);
        }

        // POST: Student/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Student student)
        {
            if (ModelState.IsValid)
            {
                db.Entry(student).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();

                TempData["Success"] = "Student updated successfully.";

                return RedirectToAction("Index");
            }

            return View(student);
        }

        // GET: Student/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            Student student = db.Student.Find(id);

            if (student == null)
                return HttpNotFound();

            return View(student);
        }

        // POST: Student/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Student student = db.Student.Find(id);

            if (student != null)
            {
                db.Student.Remove(student);
                db.SaveChanges();
            }

            TempData["Success"] = "Student deleted successfully.";

            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
                db.Dispose();

            base.Dispose(disposing);
        }
    }
}