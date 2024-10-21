import {h} from 'vue';
import {ColumnDef} from "@tanstack/vue-table";
import {Customer} from '../../../interfaces/Customer.ts';

export const customerColumns: ColumnDef<Customer>[] = [
    {
        accessorKey: 'email',
        header: () => h('div', {class: 'text-left'}, 'Email'),
        cell: ({row}) => h('div', {class: 'text-left'}, row.getValue('email'))
    },
    {
        accessorKey: 'phoneNumber',
        header: () => h('div', {class: 'text-right'}, 'Phone Number'),
        cell: ({row}) => h('div', {class: 'text-right'}, row.getValue('phoneNumber'))
    },
    {
        accessorKey: 'totalPurchaseCount',
        header: () => h('div', {class: 'text-center'}, 'Purchases'),
        cell: ({row}) => h('div', {class: 'text-center'}, row.getValue('totalPurchaseCount'))
    },
    {
        accessorKey: 'totalProfit',
        header: () => h('div', {class: 'text-right'}, 'Profit'),
        cell: ({row}) => {
            const price = Number.parseFloat(row.getValue('totalProfit'));
            const formatted = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price);
            return h('div', {class: 'text-right '}, formatted);
        }
    },
];
