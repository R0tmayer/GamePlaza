<template>
	<div class="grid grid-cols-6 gap-10">
		<ProductListCard v-for="index in 10"></ProductListCard>
	</div>
</template>

<script setup lang="ts">
import ProductListCard from '../custom/ProductListCard.vue';
</script>
