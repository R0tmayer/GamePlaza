import {defineStore} from "pinia";
import {mockProducts} from "@mocks/mockProducts.ts";
import {ref} from "vue";

export const useProductStore = defineStore("useProductStore", () => {
    const products = ref(mockProducts);

    return {products}
})