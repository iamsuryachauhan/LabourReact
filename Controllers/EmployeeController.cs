using LabourReact.Models;
using LabourReact.RequestModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LabourReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDbContext _dbcontext;
        public EmployeeController(EmployeeDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        [HttpGet]
        [Route("GetEmployees")]
        public IActionResult GetEmployees()
        {
            try
            {
                List<Employee> list = _dbcontext.Employees.ToList();
                return StatusCode(StatusCodes.Status200OK, list);
            }
            catch (Exception ee)
            {

                throw;
            }
        }

        [HttpPost]
        [Route("SaveEmployeesData")]
        public IActionResult PostEmployeeData(EmployeeModel employeeModel)
        {
            try
            {
                var empData = new Employee
                {
                    EmployeeName = employeeModel.EmployeeName,
                    Department = employeeModel.Department,
                    DateOfJoining = employeeModel.DateOfJoining,
                    PhotoFileName = employeeModel.PhotoFileName
                };
                using (var context = new EmployeeDbContext())
                {
                    context.Employees.Add(empData);
                    context.SaveChanges();
                }
                //_dbcontext.Add<Employee>(empData);
                return StatusCode(StatusCodes.Status202Accepted);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}
