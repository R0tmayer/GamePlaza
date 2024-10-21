using GamePlazaAPI.DAL.Entities;

namespace GamePlazaAPI.Domain.Services;

public interface ICartService
{
    Task<List<CartItem>> GetAllItemsByUserId(int userId);
    Task<List<CartItem>> GetItemsByIds(params Guid[] itemsIds);
    Task<CartItem?> GetItemByUserIdAndProductId(int userId, Guid productId);
    Task<Guid> AddItem(CartItem newItem);
    Task IncrementItemQuantity(Guid itemId);
    Task DecrementItemQuantity(Guid itemId);
    Task RemoveItemsByIds(params Guid[] itemsIds);
    Task RemoveAllItems();
}