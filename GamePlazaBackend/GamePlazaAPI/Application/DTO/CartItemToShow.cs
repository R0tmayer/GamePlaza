using GamePlazaAPI.DAL.Entities;

namespace GamePlazaAPI.Application.DTO;

public class CartItemToShow
{
    public Guid Id { get; set; }
    public Product Product { get; set; }
    public int Quantity { get; set; }
}