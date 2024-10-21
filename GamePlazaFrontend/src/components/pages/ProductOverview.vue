<template>
	<header>
		<p class="text-3xl">Genshin Impact</p>
	</header>
	<main class="grid grid-cols-7 mt-5 gap-10">
		<section class="col-span-5">
			<ProductScreenshot></ProductScreenshot>
			<article class="flex justify-between mt-5 mx-5 gap-x-5">
				<ProductScreenshot></ProductScreenshot>
				<ProductScreenshot></ProductScreenshot>
				<ProductScreenshot></ProductScreenshot>
				<ProductScreenshot></ProductScreenshot>
				<ProductScreenshot></ProductScreenshot>
			</article>
			<Card class="mt-5">
				<CardHeader>
					<CardTitle class="text-muted-foreground text-xl">Description</CardTitle>
				</CardHeader>
				<CardContent
					>Genshin Impact [a] is an action role-playing game developed and published by
					miHoYo (with publishing outside mainland China under Cognosphere, d/b/a
					HoYoverse). It was released for Android, iOS, PlayStation 4, and Windows in
					2020, and for PlayStation 5 in 2021. The game features an anime-style open-world
					environment and an action-based battle system using elemental magic and
					character-switching. A free-to-play game monetized through gacha game mechanics,
					Genshin Impact is updated regularly using the games as a service model. Genshin
					Impact takes place in the fantasy world of Teyvat, home to seven nations, each
					of which is tied to a different element and ruled by a different god (archon).
					The story follows The Traveler, an interstellar adventurer who, at the start of
					the game, is separated from their twin sibling after the two land in Teyvat.
				</CardContent>
			</Card>
		</section>
		<aside class="col-span-2 space-y-5">
			<ProductScreenshot></ProductScreenshot>
			<div class="flex flex-col space-y-5">
				<div class="inline-flex justify-around items-center space-x-5">
					<p class="text-3xl font-medium">$199</p>
					<Button size="lg" class="w-full">ADD TO CART</Button>
				</div>
				<Card>
					<CardContent>
						<div class="space-y-3 mt-3">
							<div class="flex items-center justify-between">
								<p class="l text-muted-foreground">Genre</p>
								<p class="">Action</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">Release</p>
								<p class="">2024</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">Platform</p>
								<p class="">Windows, PS5</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">Developer</p>
								<p class="">Respawn</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">Action</p>
								<p class="">GameBuiz</p>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle class="text-muted-foreground text-xl"
							>System Requirements</CardTitle
						>
					</CardHeader>
					<CardContent>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">OS</p>
								<p class="">Windows 10 (20H1 64 bits)</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">CPU</p>
								<p class="">Intel Core i5-4690k (3.5 GHz)</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">Memory</p>
								<p class="">16 GB</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">Graphics Card</p>
								<p class="">NVIDIA GeForce GT 1030</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">DirectX version</p>
								<p class="">12</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-muted-foreground">Storage</p>
								<p class="">55 GB</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</aside>
	</main>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProductScreenshot from '../custom/ProductScreenshot.vue';
import Button from '../ui/button/Button.vue';
</script>
