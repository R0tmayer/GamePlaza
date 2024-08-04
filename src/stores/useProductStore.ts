import {defineStore} from "pinia";
import {mockProducts} from "@mocks/mockProducts.ts";

export const useProductStore = defineStore("useProductStore", {
    state: () => ({
        products: mockProducts
    }),
    getters: {},
    actions: {}
})