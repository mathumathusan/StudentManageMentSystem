using CrudApi.Data;
using CrudApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace crudapi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class StudentsController : ControllerBase
	{

        private readonly ApplicationDbContext _context;
        public StudentsController(ApplicationDbContext context)
        {
                _context = context;
        }

        [HttpPost]
        public ActionResult Create([FromBody] Students students)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.Students.Add(students);
            _context.SaveChanges();
            return Ok();


        }
    }
}
