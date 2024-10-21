import {defineStore} from "pinia";
import {fakeSales} from "@/fakes/fakeSales.ts";

export const useSaleStore = defineStore("useSaleStore", {
    state: () => ({
        sales: fakeSales
    }),
    getters: {},
    actions: {}
})