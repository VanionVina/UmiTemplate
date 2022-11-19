using Microsoft.EntityFrameworkCore;

namespace Api.Data {
    public partial class MariaDbContext : Microsoft.EntityFrameworkCore.DbContext{
        public MariaDbContext(DbContextOptions<MariaDbContext> options) : base(options){
        }
        public virtual DbSet<Company> Companys { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}