<template>
  <main class="flex justify-center space-x-10">
    <Card class="w-[758px]">
      <CardHeader>
        <CardTitle class="text-muted-foreground">Shopping cart</CardTitle>
      </CardHeader>
      <CardContent class="text-xl">
        <div v-for="item in cartStore.items">
          <ShoppingCartItem :item="item"></ShoppingCartItem>
          <Separator class="my-5"></Separator>
        </div>
      </CardContent>
    </Card>
    <Card class="w-80 h-fit">
      <CardHeader>
        <CardTitle class="text-muted-foreground">Summary</CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col space-y-3">
        <div class="inline-flex justify-between text-lg mx-2">
          <p>Total</p>
          <p>$999</p>
        </div>
        <Button>PAY</Button>
      </CardContent>
    </Card>
  </main>
</template>

<script setup lang="ts">
import ShoppingCartItem from '../custom/ShoppingCartItem.vue';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {useCartStore} from "@/stores/useCartStore.ts";
import Separator from '../ui/separator/Separator.vue';
import {onMounted} from "vue";

const cartStore = useCartStore();

onMounted(async () => {
  await cartStore.getItems();
})

</script>
