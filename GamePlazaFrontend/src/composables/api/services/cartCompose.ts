import {AxiosInstance, AxiosResponse} from "axios";
import {CartItem} from "@interfaces/CartItem.ts";

export default (api: AxiosInstance) => ({
    getItemsByUserId: (userId: number): Promise<AxiosResponse<CartItem[]>> => api.get('cart/all/', {params: {userId: userId}}),
    getItemsByIds: (itemsIds: string[]): Promise<AxiosResponse<CartItem[]>> => api.post('cart/getbyids/', itemsIds),

    addItem: (userId: number, productId: string): Promise<AxiosResponse<CartItem>> => api.post('cart/add', {
        userId,
        productId
    }),

    removeItemsByIds: (itemsIds: string[]): Promise<AxiosResponse<void>> => api.post('cart/removebyids', itemsIds),

    increment: (itemId: string): Promise<AxiosResponse<void>> => api.post('cart/increment/', {params: {itemId: itemId}}),
    decrement: (itemId: string): Promise<AxiosResponse<void>> => api.post('cart/decrement/', {params: {itemId: itemId}}),
});
