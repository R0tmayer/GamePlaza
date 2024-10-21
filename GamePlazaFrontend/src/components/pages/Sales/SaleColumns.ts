import {h} from 'vue';
import {ColumnDef} from "@tanstack/vue-table";
import {Sale} from "@/interfaces/Sale.ts";

export const saleColumns: ColumnDef<Sale>[] = [
    {
        accessorKey: 'customer',
        header: () => h('div', {class: 'text-left'}, 'Customer'),
        cell: ({row}) => h('div', {class: 'text-left'}, row.getValue('customer'))
    },
    {
        accessorKey: 'email',
        header: () => h('div', {class: 'text-left'}, 'Email'),
        cell: ({row}) => h('div', {class: 'text-left'}, row.getValue('email'))
    },
    {
        accessorKey: 'type',
        header: () => h('div', {class: 'text-left'}, 'Type'),
        cell: ({row}) => h('div', {class: 'text-left'}, row.getValue('type'))
    },
    {
        accessorKey: 'date',
        header: () => h('div', {class: 'text-left'}, 'Date'),
        cell: ({row}) => {
            const date = new Date(row.getValue('date'));
            const formattedDate = date.toLocaleDateString('ru');
            return h('div', {class: 'text-left'}, formattedDate);
        }
    },
    {
        accessorKey: 'amount',
        header: () => h('div', {class: 'text-right'}, 'Amount'),
        cell: ({row}) => {
            const amount = Number.parseFloat(row.getValue('amount'));
            const formatted = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
            return h('div', {class: 'text-right font-medium'}, formatted);
        }
    }
];
