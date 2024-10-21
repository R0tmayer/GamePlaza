namespace GamePlazaAPI.DAL.Entities;

public class CartItem
{
    public Guid Id { get; set; }
    public int UserId { get; set; }
    public Guid ProductId { get; set; }
    public Product Product { get; set; }
    public int Quantity { get; set; }
}