import {AxiosInstance, AxiosResponse} from "axios";
import {Product} from "@interfaces/Product";
import {Enum} from "@interfaces/Enum.ts";

export default (api: AxiosInstance) => ({
    getProducts: (): Promise<AxiosResponse<Product[]>> => api.get('product/all'),
    getProductsByIds: (productsIds: string[]): Promise<AxiosResponse<Product[]>> => api.post('product/getbyids', productsIds),

    getPlatforms: (): Promise<AxiosResponse<Enum[]>> => api.get('product/platforms'),
    getGenres: (): Promise<AxiosResponse<Enum[]>> => api.get('product/genres'),

    addProduct: (product: Product): Promise<AxiosResponse<Product>> => {
        // extract product fields except id and imageUrl cuz DTO doesn't need it
        const {id, imageUrl, ...newProduct} = product;
        return api.post('product/add', newProduct);
    },

    removeProductById: (productId: string): Promise<AxiosResponse<void>> => api.get('product/removeById', {params: {id: productId}}),
    removeAllProducts: (): Promise<AxiosResponse<void>> => api.get('product/all'),
});
