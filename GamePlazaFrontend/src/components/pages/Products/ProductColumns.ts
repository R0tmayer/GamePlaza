import {h} from 'vue';
import {ColumnDef} from "@tanstack/vue-table";
import {Product} from "@/interfaces/Product.ts";
import DropdownAction from "@pages/Products/ProductDataTableRowDropdown.vue";

export const productColumns: ColumnDef<Product>[] = [
    {
        accessorKey: 'title',
        header: () => h('div', {class: 'text-left'}, 'Name'),
        cell: ({row}) => h('div', {class: 'text-left'}, row.getValue('name'))
    },
    {
        accessorKey: 'genre',
        header: () => h('div', {class: 'text-left'}, 'Genres'),
        cell: ({row}) => {
            const genres = row.getValue('genre') as string[];
            return h('div', {class: 'text-left'}, genres.join(', '));
        }
    },
    {
        accessorKey: 'platform',
        header: () => h('div', {class: 'text-left'}, 'Platform'),
        cell: ({row}) => {
            const platforms = row.getValue('platform') as string[];
            return h('div', {class: 'text-left'}, platforms.join(', '));
        }
    },
    {
        accessorKey: 'imageUrl',
        header: () => h('div', {class: 'text-left'}, 'Image'),
        cell: ({row}) => h('img', {src: row.getValue('image'), class: 'w-10 h-10'})
    },
    {
        accessorKey: 'price',
        header: () => h('div', {class: 'text-right'}, 'Price'),
        cell: ({row}) => {
            const price = Number.parseFloat(row.getValue('price'));
            const formatted = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price);
            return h('div', {class: 'text-right '}, formatted);
        }
    },
    {
        accessorKey: 'totalSales',
        header: () => h('div', {class: 'text-right'}, 'Total Sales'),
        cell: ({row}) => h('div', {class: 'text-right'}, row.getValue('totalSales'))
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({row}) => {
            const product = row.original;
            return h('div', {class: 'relative'}, [
                h(DropdownAction, {product})
            ]);
        }
    }
];
