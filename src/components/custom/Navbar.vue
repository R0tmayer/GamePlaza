<template>
	<header class="border-b sticky top-0 bg-background">
		<div class="container h-16 flex items-center justify-between">
			<div class="flex items-baseline space-x-6">
				<div class="text-lg font-semibold">GamePlaza</div>
				<nav class="flex space-x-6">
					<p>Browse</p>
					<p>Catalog</p>
					<p>Subscriptions</p>
				</nav>
				<div class="w-96">
					<Input type="text" placeholder="Search game" />
				</div>
			</div>
			<nav class="flex items-center justify-between space-x-3">
				<p>Cart</p>
				<p>Login</p>
				<p>Register</p>
			</nav>
		</div>
	</header>
</template>

<script setup lang="ts">
import Input from '../ui/input/Input.vue';
</script>
