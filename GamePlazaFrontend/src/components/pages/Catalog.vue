<template>
  <Card class="border-none shadow-none">
    <CardHeader class="px-2.5 pb-1">
      <CardDescription class="flex w-1/5 gap-5">
        <VSelector :values="testArray" :placeholder="placeholder"></VSelector>
      </CardDescription>
    </CardHeader>
    <CardContent class="grid grid-cols-6 justify-items-center gap-x-12 gap-y-3 mt-5">
      <ProductCard v-for="product in productStore.products"
                   :product="product">
      </ProductCard>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import ProductCard from '../custom/ProductCard.vue';
import {Card, CardContent, CardDescription, CardHeader} from "@shadcn/card";
import {useProductStore} from "@/stores/useProductStore.ts";

import VSelector from "@custom/VSelector.vue";

const placeholder = ref('Sorting by')
const testArray = [
  {value: 'apple', label: 'Apple'},
  {value: 'banana', label: 'Banana'},
  {value: 'orange', label: 'Orange'}
];

const productStore = useProductStore();

onMounted(async () => {
  await productStore.getProducts();
})
</script>
