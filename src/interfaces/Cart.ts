import {CartItem} from "@interfaces/CartItem.ts";

export interface Cart {
    id: string;
    customerId: string;
    cartItems: CartItem[];
}