// using GamePlazaAPI.DAL.Entities;
//
// namespace GamePlazaAPI.DAL.Repositories;
//
// public class FakeProductRepository : IProductRepository
// {
//     private readonly string[] _titles = {
//         "Disco Elysium",
//         "GTA 5",
//         "Helldrivers 2",
//         "Manor Lords",
//         "Outcast",
//         "Pacific Drive",
//         "Risk of Rain 2"
//     };
//     
//     private const string baseUrl = "http://localhost:5287";
//     private const string baseImageUrl = "/images/products/";
//
//     private readonly string _imagesDirectory;
//     private readonly string[] _imageFileUrls;
//     private readonly List<Product> _products;
//
//     public FakeProductRepository()
//     {
//         _imagesDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images/products");
//         
//         _imageFileUrls = Directory.GetFiles(_imagesDirectory)
//             .Select(x => baseUrl + baseImageUrl + Path.GetFileName(x))
//             .ToArray();
//
//         _products = GenerateProducts();
//     }
//
//     private List<Product> GenerateProducts()
//     {
//         var products = new List<Product>
//         {
//             new Product
//             {
//                 Id = Guid.Parse("11111111-1111-1111-1111-111111111111"),
//                 Title = _titles[0],
//                 Description = $"Description for {_titles[0]}",
//                 Price = 29.99m,
//                 Genre = Genre.RPG,
//                 Platform = Platform.PC,
//                 ImageUrl = _imageFileUrls[0]
//             },
//             new Product
//             {
//                 Id = Guid.Parse("22222222-2222-2222-2222-222222222222"),
//                 Title = _titles[1],
//                 Description = $"Description for {_titles[1]}",
//                 Price = 59.99m,
//                 Genre = Genre.Action,
//                 Platform = Platform.PC,
//                 ImageUrl = _imageFileUrls[1]
//             },
//             new Product
//             {
//                 Id = Guid.Parse("33333333-3333-3333-3333-333333333333"),
//                 Title = _titles[2],
//                 Description = $"Description for {_titles[2]}",
//                 Price = 39.99m,
//                 Genre = Genre.Action,
//                 Platform = Platform.PC,
//                 ImageUrl = _imageFileUrls[2]
//             },
//             new Product
//             {
//                 Id = Guid.Parse("44444444-4444-4444-4444-444444444444"),
//                 Title = _titles[3],
//                 Description = $"Description for {_titles[3]}",
//                 Price = 49.99m,
//                 Genre = Genre.Strategy,
//                 Platform = Platform.PC,
//                 ImageUrl = _imageFileUrls[3]
//             },
//             new Product
//             {
//                 Id = Guid.Parse("55555555-5555-5555-5555-555555555555"),
//                 Title = _titles[4],
//                 Description = $"Description for {_titles[4]}",
//                 Price = 19.99m,
//                 Genre = Genre.Adventure,
//                 Platform = Platform.PC,
//                 ImageUrl = _imageFileUrls[4]
//             },
//             new Product
//             {
//                 Id = Guid.Parse("66666666-6666-6666-6666-666666666666"),
//                 Title = _titles[5],
//                 Description = $"Description for {_titles[5]}",
//                 Price = 34.99m,
//                 Genre = Genre.Simulation,
//                 Platform = Platform.PC,
//                 ImageUrl = _imageFileUrls[5]
//             },
//             new Product
//             {
//                 Id = Guid.Parse("77777777-7777-7777-7777-777777777777"),
//                 Title = _titles[6],
//                 Description = $"Description for {_titles[6]}",
//                 Price = 24.99m,
//                 Genre = Genre.RPG,
//                 Platform = Platform.PC,
//                 ImageUrl = _imageFileUrls[6]
//             }
//         };
//
//         return products;
//     }
//
//     public List<Product> GetAllProducts()
//     {
//         return _products;
//     }
//
//     public Product GetProductById(Guid id)
//     {
//         throw new NotImplementedException();
//     }
//
//     public Guid AddProduct(Product product)
//     {
//         throw new NotImplementedException();
//     }
//
//     public void UpdateProduct(Product newProduct)
//     {
//         throw new NotImplementedException();
//     }
//
//     public void RemoveProductById(Guid id)
//     {
//         throw new NotImplementedException();
//     }
// }