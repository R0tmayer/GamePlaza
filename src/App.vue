<template>
	<Navbar></Navbar>
	<div class="container mx-auto mt-5">
		<!-- <ProductList></ProductList> -->
		<!-- <ProductOverview></ProductOverview> -->
		<!-- <Register></Register> -->
		<!-- <Login></Login> -->
		<!-- <ShoppingCart></ShoppingCart> -->
		<Sales></Sales>
	</div>
</template>

<script setup lang="ts">
import Navbar from './components/custom/Navbar.vue';
import Login from './components/pages/Login.vue';
import ProductList from './components/pages/ProductList.vue';
import ProductOverview from './components/pages/ProductOverview.vue';
import Register from './components/pages/Register.vue';
import Sales from './components/pages/Sales.vue';
import ShoppingCart from './components/pages/ShoppingCart.vue';
</script>
