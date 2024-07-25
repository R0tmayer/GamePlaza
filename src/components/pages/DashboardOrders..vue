<template>
	<div class="flex min-h-screen w-full bg-muted/40 border rounded-lg overflow-hidden">
		<aside class="min-h-screen max-w-fit px-4 border-r bg-background">
			<nav class="flex flex-col max-w-fit items-start py-6 gap-3 text-lg">
				<a class="flex items-center justify-center rounded-lg h-9 gap-2 px-2">
					<House></House>
					<p>Dashboard</p>
				</a>
				<a class="flex items-center justify-center rounded-lg h-9 gap-2 px-2">
					<Package></Package>
					<p>Products</p>
				</a>
				<a class="flex items-center justify-center bg-accent rounded-lg h-9 gap-2 px-2">
					<ReceiptText></ReceiptText>
					<p>Orders</p>
				</a>
				<a class="flex items-center justify-center rounded-lg h-9 gap-2 px-2">
					<Users></Users>
					<p>Orders</p>
				</a>
			</nav>
		</aside>
		<main class="flex gap-4 p-4">
			<section class="grid auto-rows-max">
				<article class="">
					<Card>
						<CardHeader>
							<CardDescription>Orders</CardDescription>
							<CardTitle class="text-4xl">499</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-muted-foreground">+5% from last week</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardDescription>This Week</CardDescription>
							<CardTitle class="text-4xl">$1,329</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-muted-foreground">+25% from last week</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardDescription>This Month</CardDescription>
							<CardTitle class="text-4xl">$5,329</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-muted-foreground">+10% from last month</p>
						</CardContent>
					</Card>
				</article>
			</section>
			<aside>
				<Card>
					<CardHeader>
						<CardTitle>title</CardTitle>
					</CardHeader>
					<CardContent>content</CardContent>
				</Card>
			</aside>
		</main>
	</div>
</template>

<script setup lang="ts">
import { House, Package, ReceiptText, Users } from 'lucide-vue-next';
import Card from '../ui/card/Card.vue';
import CardContent from '../ui/card/CardContent.vue';
import CardDescription from '../ui/card/CardDescription.vue';
import CardHeader from '../ui/card/CardHeader.vue';
import CardTitle from '../ui/card/CardTitle.vue';
</script>
