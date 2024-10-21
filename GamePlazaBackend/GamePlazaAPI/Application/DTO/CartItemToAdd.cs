using GamePlazaAPI.DAL.Entities;

namespace GamePlazaAPI.Application.DTO;

public class CartItemToAdd
{
    public int UserId { get; set; }
    public Guid ProductId { get; set; }

    public CartItem ToCartItem()
    {
        return new CartItem()
        {
            Id = new Guid(),
            UserId = UserId,
            ProductId = ProductId,
            Quantity = 1
        };
    }
}