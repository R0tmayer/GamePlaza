<template>
  <Navbar></Navbar>
  <div class="container text- mx-auto mt-5">
    <Products></Products>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@custom/Navbar.vue';
import Products from '@pages/Products/Products.vue';
</script>
