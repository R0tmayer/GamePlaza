import {defineStore} from "pinia";
import {mockCustomers} from "@mocks/mockCustomers.ts";

export const useCustomerStore = defineStore('useCustomerStore', () => {
    const customers = mockCustomers;

    return {customers};
})