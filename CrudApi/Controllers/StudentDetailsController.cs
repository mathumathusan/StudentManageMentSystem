using CrudApi.Data;
using CrudApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CrudApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentDetailsController : ControllerBase
    {

        public readonly ApplicationDbContext _context;
        public StudentDetailsController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpPost]
        public IActionResult Create([FromBody] StudentDetails student)
        {
            var existingstundent = _context.StudentDetails.FirstOrDefault(x => x.Id == student.Id);
            if (existingstundent != null)
            {
                return BadRequest();

            }

            _context.StudentDetails.Add(student);
            _context.SaveChanges();

            return Ok(student);

        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var students = _context.StudentDetails.ToList();

            return Ok(students);

        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var student = _context.StudentDetails.Find(id);

            return Ok(student);

        }

        [HttpPut("{id}")]
        public IActionResult UpdateById(int id, [FromBody] StudentDetails student)
        {

            var updatestudent = _context.StudentDetails.Find(id);

            if (updatestudent == null) { 

                return BadRequest();
            
            }
           
            updatestudent.Name = student.Name;
            updatestudent.Area = student.Area;
            updatestudent.Email = student.Email;
            updatestudent.Course = student.Course;


			_context.SaveChanges();
			return Ok(updatestudent);
        }

        [HttpDelete]
        public IActionResult DeleteById(int id)
        {

            var student = _context.StudentDetails.FirstOrDefault(x=>x.Id == id);
            if (student == null)
            {
                return BadRequest();
            }
            _context.StudentDetails.Remove(student);
             _context.SaveChanges();

            return Ok("deleted");
        }




	}
}
