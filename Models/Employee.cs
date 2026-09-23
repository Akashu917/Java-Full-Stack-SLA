using System.ComponentModel.DataAnnotations;

namespace EmployeeAttendanceMVC.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }

        [Required(ErrorMessage = "Employee name is required.")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Name must be between 2 and 100 characters.")]
        [Display(Name = "Full Name")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address.")]
        [StringLength(150)]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Department is required.")]
        [StringLength(80)]
        public string Department { get; set; } = string.Empty;

        // Navigation property: one employee can have many attendance records.
        // Not required/validated - it's a relationship, not user input.
        public ICollection<Attendance>? Attendances { get; set; }
    }
}
