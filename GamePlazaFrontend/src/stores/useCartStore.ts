import {defineStore} from "pinia";
import {CartItem} from "@interfaces/CartItem.ts";
import {api} from "@/composables/api/api.ts";
import {ref} from "vue";

export const useCartStore = defineStore("useCartStore", () => {
    const items = ref<CartItem[]>([]);

    async function getItems() {
        const userId = 2;
        const response = await api.cart.getItemsByUserId(userId);
        items.value = response.data;
    }

    async function addItem(userId: number, productId: string) {
        let existingItem = items.value.find(x => x.userId === userId && x.product.id === productId);

        if (existingItem) {
            await increment(existingItem.id);
        } else {
            const response = await api.cart.addItem(userId, productId);
            let addedItem = response.data;
            items.value.push(addedItem);
        }
    }

    async function removeItemsByIds(itemsIds: string[]) {
        let existingItems = items.value.filter(x => itemsIds.includes(x.id));

        if (existingItems) {
            await api.cart.removeItemsByIds(itemsIds);
            items.value = items.value.filter(item => !itemsIds.includes(item.id));
        }

        alert(`No item with this ID ${itemsIds}`);
        return;
    }

    async function removeItem(itemId: string) {
        let existingItem = items.value.find(x => x.id === itemId);

        if (existingItem) {
            await api.cart.removeItemsByIds([itemId]);
            const index = items.value.indexOf(existingItem);
            items.value.splice(index, 1);
            return
        }

        alert(`No item with this ID ${itemId}`);
        return;
    }

    async function increment(itemId: string) {
        let item = items.value.find(x => x.id === itemId);

        if (!item) {
            alert(`No item with this ID ${itemId}`);
            return;
        }

        item.quantity++;
    }

    async function decrement(itemId: string) {
        let item = items.value.find(x => x.id === itemId);

        if (!item) {
            alert(`No item with this ID ${itemId}`);
            return;
        }

        if (item.quantity == 1) {
            const index = items.value.indexOf(item);
            items.value.splice(index, 1);
        } else {
            item.quantity--;
        }
    }

    return {items, getItems, addItem, removeItem, removeItemsByIds, increment, decrement};
}, {
    persist: true,
});