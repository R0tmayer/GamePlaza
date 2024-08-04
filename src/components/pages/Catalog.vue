<template>
  <div class="grid grid-cols-6 gap-10">
    <ProductCard v-for="product in store.products" :name="product.name" :price="product.price"
                 :image="product.image"></ProductCard>
  </div>
</template>

<script setup lang="ts">
import {useProductStore} from "@/stores/useProductStore.ts";

const store = useProductStore();

import ProductCard from '../custom/ProductCard.vue';
</script>
