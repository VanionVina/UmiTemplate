using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Data {
    public class Department{
        public int Id { get; set; }
        
        [Column(TypeName = "varchar(128)")]
        public string ?Name {get; set; }

        [ForeignKey(nameof(Company))]
        public int CompanyId { get; set; }

        public Company Company { get; set; }
    }
}