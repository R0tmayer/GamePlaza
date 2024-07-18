<template>
	<header class="border-b sticky top-0 bg-background">
		<div class="mx-10 h-16 flex items-center justify-between">
			<div class="flex items-baseline space-x-6">
				<div class="text-xl font-semibold">GamePlaza</div>
				<nav class="flex space-x-6">
					<p class="text-lg">Browse</p>
					<p class="text-lg">Catalog</p>
					<p class="text-lg">Subscriptions</p>
				</nav>
				<div class="w-96">
					<Input type="text" placeholder="Search game" class="text-md" />
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
