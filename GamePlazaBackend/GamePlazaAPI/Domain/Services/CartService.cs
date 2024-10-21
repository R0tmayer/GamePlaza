using GamePlazaAPI.CustomExceptions;
using GamePlazaAPI.DAL.Entities;
using GamePlazaAPI.DAL.Repositories;

namespace GamePlazaAPI.Domain.Services;

public class CartService : ICartService
{
    private readonly ICartRepository _cartRepository;
    private readonly IProductService _productService;

    public CartService(ICartRepository cartRepository, IProductService productService)
    {
        _cartRepository = cartRepository;
        _productService = productService;
    }

    public async Task<List<CartItem>> GetAllItemsByUserId(int userId)
    {
        var items = await _cartRepository.GetAllItemsByUserId(userId);
        return items;
    }

    public async Task<List<CartItem>> GetItemsByIds(params Guid[] itemIds)
    {
        var items = await _cartRepository.GetItemsByIds(itemIds);
        return items;
    }

    public async Task<CartItem?> GetItemByUserIdAndProductId(int userId, Guid productId)
    {
        var item = await _cartRepository.GetItemByUserIdAndProductId(userId, productId);
        return item;
    }

    public async Task<Guid> AddItem(CartItem newItem)
    {
        var existingProduct = await _productService.GetProductsByIds(newItem.ProductId);

        if (existingProduct is null)
        {
            throw new EntityNotFoundException<Product>(newItem.ProductId);
        }

        var existingItem = await GetItemByUserIdAndProductId(newItem.UserId, newItem.ProductId);

        if (existingItem is null)
        {
            var addedItemId = await _cartRepository.AddItem(newItem);
            return addedItemId;
        }

        await _cartRepository.IncrementItemQuantity(existingItem);
        return existingItem.Id;
    }

    public async Task IncrementItemQuantity(Guid itemId)
    {
        var items = await _cartRepository.GetItemsByIds(itemId);
        var item = items.FirstOrDefault();

        if (item is null)
        {
            throw new EntityNotFoundException<CartItem>(itemId);
        }

        await _cartRepository.IncrementItemQuantity(item);
    }

    public async Task DecrementItemQuantity(Guid itemId)
    {
        var items = await _cartRepository.GetItemsByIds(itemId);
        var item = items.FirstOrDefault();

        if (item is null)
        {
            throw new EntityNotFoundException<CartItem>(itemId);
        }

        await _cartRepository.DecrementItemQuantity(item);
    }

    public async Task RemoveItemsByIds(params Guid[] itemsIds)
    {
        var itemsToRemove = await GetItemsByIds(itemsIds);

        if (itemsToRemove.Any())
        {
            await _cartRepository.RemoveItems(itemsToRemove.ToArray());
            return;
        }

        throw new EntityNotFoundException<CartItem>(itemsIds);
    }

    public async Task RemoveAllItems()
    {
        await _cartRepository.RemoveAllItems();
    }
}