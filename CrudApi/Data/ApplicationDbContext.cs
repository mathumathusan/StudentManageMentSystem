using CrudApi.Model;
using Microsoft.EntityFrameworkCore;

namespace CrudApi.Data
{
	public class ApplicationDbContext:DbContext
	{
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options) 
        {
                
        }
        public DbSet<Students> Students { get; set; }
		public DbSet<User> Users{ get; set; }

        public DbSet<StudentDetails> StudentDetails { get; set; }
	}
}
