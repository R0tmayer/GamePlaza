using GamePlazaAPI.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace GamePlazaAPI.DAL.Repositories;

public class EfCartRepository : ICartRepository
{
    private readonly ApplicationDbContext _context;

    public EfCartRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<CartItem>> GetAllItemsByUserId(int userId)
    {
        var items = await _context.CartItems
            .AsNoTracking()
            .Where(x => x.UserId == userId)
            .Include(x => x.Product)
            .ToListAsync();

        return items;
    }

    public async Task<List<CartItem>> GetItemsByIds(params Guid[] itemsIds)
    {
        var items = await _context.CartItems.Where(x => itemsIds.Contains(x.Id)).ToListAsync();
        return items;
    }

    public async Task<CartItem?> GetItemByUserIdAndProductId(int userId, Guid productId)
    {
        var cartItem = await _context.CartItems
            .SingleOrDefaultAsync(x => x.UserId == userId && x.ProductId == productId);
        return cartItem;
    }

    public async Task<Guid> AddItem(CartItem itemToAdd)
    {
        _context.CartItems.Add(itemToAdd);
        await _context.SaveChangesAsync();

        return itemToAdd.Id;
    }

    public async Task IncrementItemQuantity(CartItem item)
    {
        item.Quantity++;
        await _context.SaveChangesAsync();
    }
    
    public async Task DecrementItemQuantity(CartItem item)
    {
        if (item.Quantity <= 1)
        {
            _context.CartItems.Remove(item);
        }
        else
        {
            item.Quantity--;
        }
        
        await _context.SaveChangesAsync();
    }

    public async Task RemoveItems(params CartItem[] itemsToRemove)
    {
        _context.CartItems.RemoveRange(itemsToRemove);
        await _context.SaveChangesAsync();
    }

    public async Task RemoveAllItems()
    {
        await RemoveItems(_context.CartItems.ToArray());
    }
}