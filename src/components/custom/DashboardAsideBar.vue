<template>
  <aside class="px-2 border-r bg-background">
    <nav class="flex flex-col max-w-fit items-start py-6 gap-3 text-lg">
      <a
          class="flex items-center justify-center rounded-lg h-9 gap-2 px-2"
          href="index"
      >
        <House class="stroke-muted-foreground"></House>
      </a>
      <a
          class="flex items-center justify-center rounded-lg h-9 gap-2 px-2"
          href="index"
      >
        <Package class="stroke-muted-foreground"></Package>
      </a>
      <a
          class="flex items-center justify-center bg-accent rounded-lg h-9 gap-2 px-2"
          href="index"
      >
        <ReceiptText></ReceiptText>
      </a>
      <a
          class="flex items-center justify-center rounded-lg h-9 gap-2 px-2"
          href="index"
      >
        <Users class="stroke-muted-foreground"></Users>
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import {House, Package, ReceiptText, Users} from "lucide-vue-next";
</script>