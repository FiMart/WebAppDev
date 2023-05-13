using BasicASPTutorial.Models;
using Microsoft.EntityFrameworkCore;

namespace BasicASPTutorial.Data
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) :base(options) { 

        }
        public DbSet<Student> Student { get; set; }
        public IEnumerable<Student> Students { get; internal set; }
    }
}
