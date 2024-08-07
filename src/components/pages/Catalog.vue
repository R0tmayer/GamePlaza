<template>
  <Card>
    <CardHeader>
      <CardDescription>
        
      </CardDescription>
    </CardHeader>
    <CardContent class="bg-muted/40">
      <main class="grid grid-cols-6 justify-items-center gap-x-10 gap-y-3">
        <ProductCard v-for="product in store.products" :name="product.name"
                     :price="product.price"
                     :image="product.image">
        </ProductCard>
      </main>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import {useProductStore} from "@/stores/useProductStore.ts";

const store = useProductStore();

import ProductCard from '../custom/ProductCard.vue';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@shadcn/card";
</script>
