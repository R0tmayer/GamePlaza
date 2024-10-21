using GamePlazaAPI.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace GamePlazaAPI.DAL.Repositories;

public class EfProductRepository : IProductRepository
{
    private readonly ApplicationDbContext _context;

    public EfProductRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<Product>> GetAllProducts()
    {
        return await _context.Products.ToListAsync();
    }

    public async Task<List<Product>> GetProductsByIds(params Guid[] productsIds)
    {
        var products = await _context.Products.Where(p => productsIds.Contains(p.Id)).ToListAsync();
        return products;
    }

    public async Task<Guid> AddProduct(Product productToAdd)
    {
        _context.Products.Add(productToAdd);
        await _context.SaveChangesAsync();
        return productToAdd.Id;
    }

    public async Task UpdateProduct(Product oldProduct, Product newProduct)
    {
        oldProduct.Title = newProduct.Title;
        oldProduct.Description = newProduct.Description;
        oldProduct.Price = newProduct.Price;
        oldProduct.Genre = newProduct.Genre;
        oldProduct.Platform = newProduct.Platform;
        oldProduct.ImageUrl = newProduct.ImageUrl;
        await _context.SaveChangesAsync();
    }

    public async Task RemoveProducts(params Product[] productsToRemove)
    {
        _context.Products.RemoveRange(productsToRemove);
        await _context.SaveChangesAsync();
    }

    public async Task RemoveAllProducts()
    {
        await RemoveProducts(_context.Products.ToArray());
    }
}