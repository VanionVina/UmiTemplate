using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Data {
    public class Company{
        public int Id { get; set; }

        [Column(TypeName = "varchar(128)")]
        public string ?Name {get; set; }
    }
}