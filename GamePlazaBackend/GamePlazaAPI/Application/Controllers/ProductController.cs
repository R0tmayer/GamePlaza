using GamePlazaAPI.Application.DTO;
using GamePlazaAPI.DAL.Entities;
using GamePlazaAPI.Domain.Services;
using GamePlazaAPI.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace GamePlazaAPI.Application.Controllers;

[Route("api/[controller]")]
public class ProductController : Controller
{
    private readonly IProductService _productService;

    public ProductController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAllProducts()
    {
        var products = await _productService.GetAllProducts();
        return Ok(products);
    }

    [HttpPost("getbyids")]
    public async Task<IActionResult> GetProductsByIds([FromBody] Guid[] productsIds)
    {
        var products = await _productService.GetProductsByIds(productsIds);
        return Ok(products);
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddProduct(ProductDTO product)
    {
        var productId = await _productService.AddProduct(product.ToProduct());
        return Ok(productId);
    }

    [HttpGet("genres")]
    public JsonResult GetAllGenres()
    {
        var enumValues = EnumUtils.GetEnumValues<Genre>();
        return new JsonResult(enumValues);
    }

    [HttpGet("platforms")]
    public JsonResult GetAllPlatforms()
    {
        var enumValues = EnumUtils.GetEnumValues<Platform>();
        return new JsonResult(enumValues);
    }

    [HttpPost("removebyid")]
    public async Task<IActionResult> RemoveProductById(Guid id)
    {
        await _productService.RemoveProductsByIds(id);
        return Ok();
    }

    [HttpPost("update")]
    public async Task<IActionResult> UpdateProduct(Guid oldProductId, [FromBody] ProductDTO newProduct)
    {
        await _productService.UpdateProduct(oldProductId, newProduct.ToProduct());
        return Ok();
    }

    [HttpPost("removeall")]
    public async Task<IActionResult> RemoveAllProducts()
    {
        await _productService.RemoveAllProducts();
        return Ok();
    }
}