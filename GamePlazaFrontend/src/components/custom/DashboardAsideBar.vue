<template>
  <aside class="px-2 border-r bg-background">
    <nav class="flex flex-col max-w-fit items-start py-6 gap-3 text-lg">

      <RouterLink to="/dashboard/sales" class="flex items-center justify-center rounded-lg h-9 gap-2 px-2">
        <House class="stroke-muted-foreground"></House>
      </RouterLink>

      <RouterLink to="/dashboard/products" class="flex items-center justify-center rounded-lg h-9 gap-2 px-2"
      >
        <Package class="stroke-muted-foreground"></Package>
      </RouterLink>

      <RouterLink to="/dashboard/sales"
                  class="flex items-center justify-center bg-accent rounded-lg h-9 gap-2 px-2">
        <ReceiptText></ReceiptText>
      </RouterLink>

      <RouterLink to="/dashboard/customers"
                  class="flex items-center justify-center rounded-lg h-9 gap-2 px-2"
      >
        <Users class="stroke-muted-foreground"></Users>
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import {House, Package, ReceiptText, Users} from "lucide-vue-next";
</script>