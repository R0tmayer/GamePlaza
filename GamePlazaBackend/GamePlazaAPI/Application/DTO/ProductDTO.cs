using FluentValidation;
using GamePlazaAPI.DAL.Entities;

namespace GamePlazaAPI.Application.DTO;

public class ProductDTO
{
    public string Title { get; set; }
    public string Description { get; set; }
    public int Price { get; set; }
    public int Genre { get; set; }
    public int Platform { get; set; }

    public Product ToProduct()
    {
        return new Product()
        {
            Id = Guid.NewGuid(),
            Title = Title,
            Description = Description,
            Price = Price,
            Genre = (Genre) Genre,
            Platform = (Platform) Platform,
            ImageUrl = "http://localhost:5287/images/products/pacific_drive.jpg"
        };
    }
}

public class ProductValidator : AbstractValidator<ProductDTO>
{
    public ProductValidator()
    {
        RuleFor(x => x.Title).NotEmpty();
        RuleFor(x => x.Description).NotEmpty();
        RuleFor(x => x.Price).NotEmpty();
    }
}