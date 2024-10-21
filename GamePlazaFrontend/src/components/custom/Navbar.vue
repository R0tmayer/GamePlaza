<template>
  <header class="border-b sticky top-0 bg-background z-50">
    <div class="mx-10 h-16 flex items-center justify-between">
      <div class="flex items-baseline space-x-6">
        <div class="text-xl">GamePlaza</div>
        <nav class="flex space-x-6">
          <RouterLink to="/catalog" class="font-semibold">Catalog</RouterLink>
          <RouterLink to="/dashboard/sales">Dashboard</RouterLink>
        </nav>
        <div class="w-96">
          <Input type="text" placeholder="Search game" class="text-md"/>
        </div>
      </div>
      <nav class="flex items-center justify-between space-x-5">
        <RouterLink to="/login">
          <User></User>
        </RouterLink>
        <RouterLink to="/shoppingCart">
          <ShoppingCart></ShoppingCart>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import Input from '../ui/input/Input.vue';
import {ShoppingCart, User} from "lucide-vue-next";
</script>
