<template>
  <div class="flex items-center space-x-7 text-lg">
    <ProductScreenshot class="w-44"></ProductScreenshot>
    <p class="w-80"> {{ product.title }}</p>
    <NumberField :default-value="item.quantity" :min="1" :max="100" class="w-28">
      <NumberFieldContent>
        <NumberFieldDecrement class=""/>
        <NumberFieldInput/>
        <NumberFieldIncrement/>
      </NumberFieldContent>
    </NumberField>
    <p class="w-20 text-right">${{ product.price }}</p>
    <CircleX
        color="rgb(229 231 235)"
        class="cursor-pointer hover:stroke-slate-700"
        size="32"
        @click="removeItem"
    ></CircleX>
  </div>
</template>

<script setup lang="ts">
import ProductScreenshot from './ProductScreenshot.vue';
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field';
import {CircleX} from 'lucide-vue-next';
import {CartItem} from '@interfaces/CartItem';
import {useCartStore} from "@/stores/useCartStore.ts";

const props = defineProps<{ item: CartItem }>();
const item = props.item;
const product = props.item.product;

const cartStore = useCartStore();

function removeItem() {
  cartStore.removeItem(props.item.id);
}

</script>
