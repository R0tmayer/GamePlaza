<template>
  <Card class="overflow-hidden">
    <CardContent class="w-52 h-80 p-0">
      <header>
        <img :src="product.imageUrl" alt=""/>
      </header>
      <main class="p-2">
        <div>
          <p>{{ product.title }}</p>
        </div>
      </main>
    </CardContent>
    <CardFooter class="flex justify-between px-2.5 py-2.5">
      <p class="text-xl">${{ product.price }}</p>
      <Button size="sm" @click="addToCart">Add to cart</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {Card, CardContent, CardFooter} from "@shadcn/card";
import Button from '../ui/button/Button.vue';
import {useCartStore} from "@/stores/useCartStore.ts";
import {Product} from "@interfaces/Product.ts";

const props = defineProps<{ product: Product }>();
const product = props.product;

const cartStore = useCartStore();

function addToCart() {
  let userId = 2;
  cartStore.addItem(userId, props.product.id);
}

</script>
