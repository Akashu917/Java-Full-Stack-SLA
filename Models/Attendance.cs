using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeAttendanceMVC.Models
{
    public class Attendance : IValidatableObject
    {
        [Key]
        public int AttendanceId { get; set; }

        [Required(ErrorMessage = "Please select an employee.")]
        [Display(Name = "Employee")]
        public int EmployeeId { get; set; }

        [Required(ErrorMessage = "Date is required.")]
        [DataType(DataType.Date)]
        public DateTime Date { get; set; } = DateTime.Today;

        [Required(ErrorMessage = "Check-in time is required.")]
        [DataType(DataType.Time)]
        [Display(Name = "Check-in Time")]
        public TimeSpan CheckInTime { get; set; }

        // Check-out is optional: an employee may still be clocked in.
        [DataType(DataType.Time)]
        [Display(Name = "Check-out Time")]
        public TimeSpan? CheckOutTime { get; set; }

        // Navigation property back to Employee (foreign key relationship)
        [ForeignKey("EmployeeId")]
        public Employee? Employee { get; set; }

        // Custom cross-field validation: check-out must be after check-in when provided.
        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (CheckOutTime.HasValue && CheckOutTime.Value <= CheckInTime)
            {
                yield return new ValidationResult(
                    "Check-out time must be later than check-in time.",
                    new[] { nameof(CheckOutTime) });
            }
        }
    }
}
