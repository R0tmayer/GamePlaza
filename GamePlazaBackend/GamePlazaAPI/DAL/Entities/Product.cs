namespace GamePlazaAPI.DAL.Entities;

public class Product
{
    public Guid Id {get; set; }
    public string Title {get; set; }
    public string Description {get; set; }
    public decimal Price {get; set; }
    public Genre Genre {get; set; }
    public Platform Platform {get; set; }
    public string? ImageUrl {get; set; }
}