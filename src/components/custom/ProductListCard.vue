<template>
  <div class="border rounded-xl w-52 h-96 overflow-hidden">
    <header>
      <img src="../../assets/images/disco_elysium.jpg" alt=""/>
    </header>
    <main class="p-2 h-20">
      <div>
        <p>Disco Elysium - The Final Cut</p>
      </div>
    </main>
    <footer class="flex justify-between px-2.5">
      <p class="text-xl">199$</p>
      <Button size="sm">Add to cart</Button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Button from '../ui/button/Button.vue';
</script>
