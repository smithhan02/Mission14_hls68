using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIbackend_mission14.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIbackend_mission14.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }

        //public IEnumerable<Movie> Get()
        //{
        //    var x = context.Movies.ToArray();
        //    return (x);
        //}

        public IEnumerable<Movie> Get()
        {
            var movies = context.Movies.Where(m => m.edited == "Yes")
                                        .OrderBy(m => m.title)
                                        .ToList();
            return movies;
        }

    }
}


