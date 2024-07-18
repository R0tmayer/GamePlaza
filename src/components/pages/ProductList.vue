<template>
	<div class="grid grid-cols-6 gap-10">
		<ProductCard v-for="index in 10"></ProductCard>
	</div>
</template>

<script setup lang="ts">
import ProductCard from '../custom/ProductCard.vue';
</script>
