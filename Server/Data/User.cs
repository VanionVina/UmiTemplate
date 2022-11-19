using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Data {
    public class User{

        [Key]
        public int Id { get; set; }

        [Column(TypeName = "varchar(128)")]
        [Display(Name = "Name")]
        public string ?Name {get; set; }

        [Column(TypeName = "varchar(128)")]
        [Display(Name = "Surname")]
        public string ?Surname {get; set; }

        [Display(Name = "Age")]
        public int Age { get; set; }

        [ForeignKey(nameof(Department))]
        [Display(Name = "Department")]
        public int DepartmentId { get; set; }

        public string Password {get; set;}

        public Department Department { get; set; }

        public UserRole Role { get; set; }
    }
}