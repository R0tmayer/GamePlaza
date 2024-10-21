import cart from '@/composables/api/services/cartCompose.ts';
import {apiRoot} from '@/composables/api/instances.ts';
import product from "@/composables/api/services/productCompose.ts";

export const api = {
    cart: cart(apiRoot),
    product: product(apiRoot),
};