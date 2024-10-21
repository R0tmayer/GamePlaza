import {defineStore} from "pinia";
import {fakeCustomers} from "@/fakes/fakeCustomers.ts";

export const useCustomerStore = defineStore('useCustomerStore', () => {
    const customers = fakeCustomers;

    return {customers};
})