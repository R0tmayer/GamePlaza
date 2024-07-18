<template>
	<Navbar></Navbar>
	<div class="container mx-auto mt-5">
		<!-- <ProductList></ProductList> -->
		<ProductOverview></ProductOverview>
	</div>
</template>

<script setup lang="ts">
import Navbar from './components/custom/Navbar.vue';
import ProductList from './components/pages/ProductList.vue';
import ProductOverview from './components/pages/ProductOverview.vue';
</script>
