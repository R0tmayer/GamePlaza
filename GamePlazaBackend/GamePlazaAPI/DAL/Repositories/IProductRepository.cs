using GamePlazaAPI.DAL.Entities;

namespace GamePlazaAPI.DAL.Repositories;

public interface IProductRepository
{
    Task<List<Product>> GetAllProducts();
    Task<List<Product>> GetProductsByIds(params Guid[] productsIds);
    Task<Guid> AddProduct(Product productToAdd);
    Task UpdateProduct(Product oldProoduct, Product newProduct);
    Task RemoveProducts(params Product[] productsToRemove);
    Task RemoveAllProducts();
}