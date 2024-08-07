<template>
  <Card class="border-none shadow-none">
    <CardHeader class="px-2.5 pb-1">
      <CardDescription class="flex w-1/2 gap-5">
        <VSelector :values="testArray" :placeholder="placeholder"></VSelector>
        <VSelector :values="testArray" :placeholder="placeholder"></VSelector>
        <VSelector :values="testArray" :placeholder="placeholder"></VSelector>
      </CardDescription>
    </CardHeader>
    <Separator class="my-5"></Separator>
    <CardContent class="grid grid-cols-6 justify-items-center gap-x-12 gap-y-3">
      <ProductCard v-for="product in store.products" :key="product.id" :name="product.name"
                   :price="product.price"
                   :image="product.image">
      </ProductCard>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import {useProductStore} from "@/stores/useProductStore.ts";
import {ref} from "vue";

const store = useProductStore();

import ProductCard from '../custom/ProductCard.vue';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@shadcn/card";

import VSelector from "@custom/VSelector.vue";
import {Separator} from "@shadcn/separator";

const placeholder = ref('Sorting by')
const testArray = [
  {value: 'apple', label: 'Apple'},
  {value: 'banana', label: 'Banana'},
  {value: 'orange', label: 'Orange'}
];
</script>
