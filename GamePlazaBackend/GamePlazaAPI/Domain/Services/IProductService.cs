using GamePlazaAPI.DAL.Entities;

namespace GamePlazaAPI.Domain.Services;

public interface IProductService
{
    Task<List<Product>> GetAllProducts();
    Task<List<Product>> GetProductsByIds(params Guid[] productsIds);
    Task<Product?> GetProductById(Guid productId);
    Task<Guid> AddProduct(Product productToAdd);
    Task UpdateProduct(Guid oldProductId, Product newProduct);
    Task RemoveProductsByIds(params Guid[] productsIdsToRemove);
    Task RemoveAllProducts();
}