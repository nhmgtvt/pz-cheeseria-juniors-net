using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pz.Cheeseria.Api.Data;
using Pz.Cheeseria.Api.Models;
using Pz.Cheeseria.Api.Services.Purchase;

namespace Pz.Cheeseria.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchasedCheesesController : ControllerBase
    {
        IPurchaseCheeseService _service;
        public PurchasedCheesesController(IPurchaseCheeseService service)
        {
            _service = service;
        }

        [HttpGet]
        [Description("Get recently purchased cheeses")]
        [ProducesResponseType(typeof(PurchasedCheeseInfo[]), 200)]
        public IActionResult GetPurchasedCheeses()
        {
            return Ok(PurchasedCheesesRepository.PurchasedCheeses);
        }

        [HttpPost]
        [Description("Create recently purchased data")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult AddPurchasedCheeses([Required] [FromBody] PurchasedCheeseInfo[] purchasedCheeses)
        {
            _service.AddPurchasedCheeses(purchasedCheeses);
            return Created("Created", purchasedCheeses);
        }

        //[HttpPut]
        //[ProducesResponseType(StatusCodes.Status204NoContent)]
        //public IActionResult UpdatePurchasedCheeses([Required][FromBody] PurchasedCheeseInfo[] purchasedCheeses)
        //{
        //    _service.UpdatePurchasedCheeses(purchasedCheeses);
        //    return NoContent();
        //}

        //[HttpDelete("{purchasedCheeseId}")]
        //[ProducesResponseType(StatusCodes.Status204NoContent)]
        //public IActionResult DeletePurchasedCheeses([FromRoute] int purchasedCheeseId)
        //{
        //    _service.DeletePurchasedCheeses(purchasedCheeseId);
        //    return NoContent();
        //}
    }
}
