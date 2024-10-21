import {defineStore} from "pinia";
import {ref} from "vue";
import {Product} from "@interfaces/Product.ts";
import {api} from "@/composables/api/api.ts";

export const useProductStore = defineStore("useProductStore", () => {
    const products = ref<Product[]>([]);

    const getProducts = async () => {
        const response = await api.product.getProducts();
        products.value = response.data;
    }

    return {products, getProducts}
})