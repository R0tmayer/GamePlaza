<template>
  <div class="border rounded-xl w-52 h-96 overflow-hidden">
    <header>
      <img :src="image" alt=""/>
    </header>
    <main class="p-2 h-20">
      <div>
        <p>{{ name }}</p>
      </div>
    </main>
    <footer class="flex justify-between px-2.5">
      <p class="text-xl">${{ price }}</p>
      <Button size="sm">Add to cart</Button>
    </footer>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  id: String,
  image: String,
  name: String,
  price: Number,
})

const image = new URL(`/src/assets/images/${props.image}`, import.meta.url).href;
import Button from '../ui/button/Button.vue';
</script>
