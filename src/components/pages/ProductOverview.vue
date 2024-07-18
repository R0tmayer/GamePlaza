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
					<CardTitle class="text-muted-foreground">Description</CardTitle>
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
				<div class="inline-flex justify-around space-x-5">
					<p class="text-3xl font-medium">$199</p>
					<Button size="lg" class="w-full">ADD TO CART</Button>
				</div>
				<Card>
					<CardContent>
						<div class="space-y-4 mt-4">
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Genre</p>
								<p class="text-xl">Action</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Release</p>
								<p class="text-xl">2024</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Platform</p>
								<p class="text-xl">Windows, PS5</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Developer</p>
								<p class="text-xl">Respawn</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Action</p>
								<p class="text-xl">GameBuiz</p>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle class="text-muted-foreground">System Requirements</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="space-y-4 mt-4">
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Genre</p>
								<p class="text-xl">Action</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Release</p>
								<p class="text-xl">2024</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Platform</p>
								<p class="text-xl">Windows, PS5</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Developer</p>
								<p class="text-xl">Respawn</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-xl text-muted-foreground">Action</p>
								<p class="text-xl">GameBuiz</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</aside>
	</main>
</template>

<script setup lang="ts">
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import ProductScreenshot from '../custom/ProductScreenshot.vue';
import Button from '../ui/button/Button.vue';
</script>
