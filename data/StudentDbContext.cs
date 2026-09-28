
using System.Data.Entity;
using StudentManagementMVC.Models;


namespace StudentManagementMVC.Data
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext()
            : base("StudentManagementDB")
        {
        }

        public DbSet<Student> Student { get; set; }

        public DbSet<AdminUser> AdminUsers { get; set; }
    }
}