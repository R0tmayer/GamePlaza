using GamePlazaAPI.Application.DTO;
using GamePlazaAPI.Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace GamePlazaAPI.Application.Controllers;

[Route("api/[controller]")]
public class CartController : Controller
{
    private readonly ICartService _cartService;

    public CartController(ICartService cartService)
    {
        _cartService = cartService;
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAllItemsByUserId(int userId)
    {
        try
        {
            var cartItems = await _cartService.GetAllItemsByUserId(userId);
            var itemsToShow = cartItems.Select(x => new CartItemToShow
            {
                Id = x.Id,
                Product = x.Product,
                Quantity = x.Quantity
            }).ToList();

            return Ok(itemsToShow);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost("getbyids")]
    public async Task<IActionResult> GetItemsByIds([FromBody] Guid[] itemIds)
    {
        try
        {
            var items = await _cartService.GetItemsByIds(itemIds);
            return Ok(items);
        }
        catch (Exception e)
        {
            return NotFound(e.Message);
        }
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddItem([FromBody] CartItemToAdd cartItem)
    {
        try
        {
            var id = await _cartService.AddItem(cartItem.ToCartItem());
            var items = await _cartService.GetItemsByIds(id);
            var createdItem = items.FirstOrDefault();
            return Ok(createdItem);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost("increment")]
    public async Task<IActionResult> IncrementItemQuantity(Guid itemId)
    {
        await _cartService.IncrementItemQuantity(itemId);
        return Ok();
    }

    [HttpPost("decrement")]
    public async Task<IActionResult> DecrementItemQuantity(Guid itemId)
    {
        try
        {
            await _cartService.DecrementItemQuantity(itemId);
            return Ok();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost("removebyids")]
    public async Task<IActionResult> RemoveItemsByIds([FromBody] Guid[] itemsIds)
    {
        try
        {
            await _cartService.RemoveItemsByIds(itemsIds);
            return Ok();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost("removeallitems")]
    public async Task<IActionResult> RemoveAllItems()
    {
        await _cartService.RemoveAllItems();
        return Ok();
    }
}