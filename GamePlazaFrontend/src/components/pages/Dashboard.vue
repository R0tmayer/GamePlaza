<template>
  <div class="flex w-full bg-muted/40 border rounded-lg overflow-hidden">
    <DashboardAsideBar></DashboardAsideBar>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import DashboardAsideBar from "@custom/DashboardAsideBar.vue";
</script>

