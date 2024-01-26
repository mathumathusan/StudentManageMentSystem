using CrudApi.Data;
using CrudApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("create")]
        public ActionResult Create([FromBody] User user)
        {
            var existinguser = _context.Users.FirstOrDefault(x => x.Name == user.Name);
            if (existinguser != null)
            {
                return BadRequest("User with the same name already exists");
            }
            if (string.IsNullOrWhiteSpace(user.Name) || string.IsNullOrWhiteSpace(user.Password))
            {
                return BadRequest("Please enter both user name and password");
            }

            _context.Add(user);
            _context.SaveChanges();
            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] User user)
        {
            var existinguser = _context.Users.FirstOrDefault(x => x.Name == user.Name && x.Password == user.Password);

            if (existinguser == null)
            {
                return Unauthorized("Invalid user name or password");
            }

            return Ok(user);

        }





    }

}
