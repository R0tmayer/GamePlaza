<template>
  <Navbar></Navbar>
  <div class="container mx-auto mt-5">
    <Customers></Customers>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@custom/Navbar.vue';
import Catalog from "@pages/Catalog.vue";
import ProductOverview from "@pages/ProductOverview.vue";
import Products from '@pages/Products/Products.vue';
import Sales from "@pages/Sales/Sales.vue";
import Customers from "@pages/Customers/Customers.vue";
</script>
