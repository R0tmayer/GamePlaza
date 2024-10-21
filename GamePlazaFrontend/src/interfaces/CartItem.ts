import {Product} from "@interfaces/Product.ts";

export interface CartItem {
    id: string;
    userId: number;
    product: Product;
    quantity: number;
}