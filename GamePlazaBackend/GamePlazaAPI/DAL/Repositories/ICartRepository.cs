using GamePlazaAPI.DAL.Entities;

namespace GamePlazaAPI.DAL.Repositories;

public interface ICartRepository
{
    Task<List<CartItem>> GetAllItemsByUserId(int userId);
    Task<List<CartItem>> GetItemsByIds(params Guid[] itemsIds);
    Task<CartItem?> GetItemByUserIdAndProductId(int userId, Guid productId);
    Task<Guid> AddItem(CartItem itemToAdd);
    Task IncrementItemQuantity(CartItem item);
    Task DecrementItemQuantity(CartItem item);
    Task RemoveItems(params CartItem[] itemsToRemove);
    Task RemoveAllItems();
}