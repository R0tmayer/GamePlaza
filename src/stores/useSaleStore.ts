import {defineStore} from "pinia";
import {mockSales} from "@mocks/mockSales.ts";

export const useSaleStore = defineStore("useSaleStore", {
    state: () => ({
        sales: mockSales
    }),
    getters: {},
    actions: {}
})