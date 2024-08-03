<template>
  <Navbar></Navbar>
  <div class="container mx-auto mt-5">
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@custom/Navbar.vue';
</script>
