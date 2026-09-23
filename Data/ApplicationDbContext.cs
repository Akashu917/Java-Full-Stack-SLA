using EmployeeAttendanceMVC.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAttendanceMVC.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; } = null!;
        public DbSet<Attendance> Attendances { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Employee -> Attendance is one-to-many.
            // Restrict delete so an employee with attendance history can't be
            // removed and silently orphan/cascade-delete their records;
            // the controller instead blocks deletion when records exist.
            modelBuilder.Entity<Attendance>()
                .HasOne(a => a.Employee)
                .WithMany(e => e.Attendances)
                .HasForeignKey(a => a.EmployeeId)
                .OnDelete(DeleteBehavior.Restrict);

            // Enforce one attendance record per employee per day at the database level.
            modelBuilder.Entity<Attendance>()
                .HasIndex(a => new { a.EmployeeId, a.Date })
                .IsUnique();

            // Ensure employee emails are unique.
            modelBuilder.Entity<Employee>()
                .HasIndex(e => e.Email)
                .IsUnique();

            // Seed data so the app has something to show immediately after migration.
            modelBuilder.Entity<Employee>().HasData(
                new Employee { EmployeeId = 1, Name = "Arun Kumar", Email = "arun.kumar@example.com", Department = "Engineering" },
                new Employee { EmployeeId = 2, Name = "Priya Sharma", Email = "priya.sharma@example.com", Department = "Human Resources" },
                new Employee { EmployeeId = 3, Name = "Rahul Verma", Email = "rahul.verma@example.com", Department = "Finance" }
            );
        }
    }
}
