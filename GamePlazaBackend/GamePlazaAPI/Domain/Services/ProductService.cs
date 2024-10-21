using GamePlazaAPI.CustomExceptions;
using GamePlazaAPI.DAL.Entities;
using GamePlazaAPI.DAL.Repositories;

namespace GamePlazaAPI.Domain.Services;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<List<Product>> GetAllProducts()
    {
        return await _productRepository.GetAllProducts();
    }

    public async Task<List<Product>> GetProductsByIds(params Guid[] productsIds)
    {
        var products = await _productRepository.GetProductsByIds(productsIds);
        return products;
    }

    public async Task<Product?> GetProductById(Guid productId)
    {
        var products = await _productRepository.GetProductsByIds(productId);
        var product = products.FirstOrDefault();
        return product;
    }

    public async Task<Guid> AddProduct(Product productToAdd)
    {
        return await _productRepository.AddProduct(productToAdd);
    }

    public async Task UpdateProduct(Guid oldProductId, Product newProduct)
    {
        var products = await GetProductsByIds(oldProductId);
        var oldProduct = products.FirstOrDefault();

        if (oldProduct is null)
        {
            throw new EntityNotFoundException<Product>(oldProductId);
        }

        await _productRepository.UpdateProduct(oldProduct, newProduct);
    }

    public async Task RemoveProductsByIds(params Guid[] productsIdsToRemove)
    {
        var productsToRemove = await GetProductsByIds(productsIdsToRemove);

        if (productsToRemove.Any())
        {
            await _productRepository.RemoveProducts(productsToRemove.ToArray());
            return;
        }

        throw new EntityNotFoundException<Product>(productsIdsToRemove);
    }

    public async Task RemoveAllProducts()
    {
        await _productRepository.RemoveAllProducts();
    }
}