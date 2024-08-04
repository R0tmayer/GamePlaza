import {defineStore} from "pinia";
import {mockCustomers} from "@mocks/mockCustomers.ts";

export const useCustomerStore = defineStore("useCustomerStore", {
    state: () => ({
        customers: mockCustomers
    }),
    getters: {},
    actions: {}
})