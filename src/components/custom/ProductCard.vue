<template>
  <Card class="overflow-hidden">
    <CardContent class="w-52 h-80 p-0">
      <header>
        <img :src="image" alt=""/>
      </header>
      <main class="p-2">
        <div>
          <p>{{ name }}</p>
        </div>
      </main>
    </CardContent>
    <CardFooter class="flex justify-between px-2.5 py-2.5">
      <p class="text-xl">${{ price }}</p>
      <Button size="sm">Add to cart</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {Card, CardContent, CardFooter} from "@shadcn/card";

const props = defineProps({
  id: String,
  image: String,
  name: String,
  price: Number,
})

const image = new URL(`/src/assets/images/${props.image}`, import.meta.url).href;

import Button from '../ui/button/Button.vue';
</script>
