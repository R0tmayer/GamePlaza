<template>
	<div class="flex min-h-screen w-full bg-muted/40 border rounded-lg overflow-hidden">
		<aside class="px-4 border-r bg-background">
			<nav class="flex flex-col max-w-fit items-start py-6 gap-3 text-lg">
				<a
					href="index"
					class="flex items-center justify-center rounded-lg h-9 gap-2 px-2"
				>
					<House class="stroke-muted-foreground"></House>
				</a>
				<a
					href="index"
					class="flex items-center justify-center rounded-lg h-9 gap-2 px-2"
				>
					<Package class="stroke-muted-foreground"></Package>
				</a>
				<a
					href="index"
					class="flex items-center justify-center bg-accent rounded-lg h-9 gap-2 px-2"
				>
					<ReceiptText></ReceiptText>
				</a>
				<a
					href="index"
					class="flex items-center justify-center rounded-lg h-9 gap-2 px-2"
				>
					<Users class="stroke-muted-foreground"></Users>
				</a>
			</nav>
		</aside>
		<main class="grid grid-cols-9 flex-1 p-4 gap-4">
			<section class="grid auto-rows-max col-span-6 gap-4">
				<div class="grid grid-cols-3 gap-4">
					<Card>
						<CardHeader>
							<CardDescription>Total sales</CardDescription>
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
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Sales</CardTitle>
						<CardDescription>Recent sales</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Customer</TableHead>
									<TableHead>Email</TableHead>
									<TableHead>Type</TableHead>
									<TableHead>Date</TableHead>
									<TableHead class="text-right">Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow class="bg-accent">
									<TableCell>
										<div>Bobie Parton</div>
									</TableCell>
									<TableCell>
										<div>bob@example.com</div>
									</TableCell>
									<TableCell>
										<div>Game</div>
									</TableCell>
									<TableCell>
										<div>23.06.2023</div>
									</TableCell>
									<TableCell class="font-medium text-right">
										<div>$500,00</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div>Liam Johnson</div>
									</TableCell>
									<TableCell>
										<div>liam@example.com</div>
									</TableCell>
									<TableCell>
										<div>Game</div>
									</TableCell>
									<TableCell>
										<div>23.06.2023</div>
									</TableCell>
									<TableCell class="font-medium text-right">
										<div>$250,00</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div>Steve Adamson</div>
									</TableCell>
									<TableCell>
										<div>stevie@example.com</div>
									</TableCell>
									<TableCell>
										<div>Subscription</div>
									</TableCell>
									<TableCell>
										<div>23.06.2023</div>
									</TableCell>
									<TableCell class="font-medium text-right">
										<div>$250,00</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div>Steve Adamson</div>
									</TableCell>
									<TableCell>
										<div>stevie@example.com</div>
									</TableCell>
									<TableCell>
										<div>Subscription</div>
									</TableCell>
									<TableCell>
										<div>23.06.2023</div>
									</TableCell>
									<TableCell class="font-medium text-right">
										<div>$250,00</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div>Steve Adamson</div>
									</TableCell>
									<TableCell>
										<div>stevie@example.com</div>
									</TableCell>
									<TableCell>
										<div>Subscription</div>
									</TableCell>
									<TableCell>
										<div>23.06.2023</div>
									</TableCell>
									<TableCell class="font-medium text-right">
										<div>$250,00</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div>John Stockston</div>
									</TableCell>
									<TableCell>
										<div>johnie@example.com</div>
									</TableCell>
									<TableCell>
										<div>Subscription</div>
									</TableCell>
									<TableCell>
										<div>23.06.2024</div>
									</TableCell>
									<TableCell class="font-medium text-right">
										<div>$120,00</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</section>
			<aside class="col-span-3">
				<Card>
					<CardHeader class="flex flex-col gap-0.5 bg-muted/50">
						<div class="flex items-center justify-between">
							<CardTitle class="text-lg">Sale ID: qwerty</CardTitle>
							<DropdownMenu>
								<DropdownMenuTrigger as-child>
									<Button size="sm" variant="outline">
										<MoreVertical class="h-3.5 w-3.5"></MoreVertical>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Edit</DropdownMenuItem>
									<DropdownMenuItem>Export</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Trash</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div>
							<CardDescription>Date: November 23, 2023</CardDescription>
						</div>
					</CardHeader>
					<CardContent class="grid p-6 text-sm gap-3">
						<div class="grid gap-3">
							<div class="font-semibold">
								<p>Sale Details</p>
							</div>
							<ul class="grid gap-3">
								<li class="flex justify-between">
									<span class="text-muted-foreground">Glimmer Lamps x 2</span>
									<span>$250,00</span>
								</li>
								<li class="flex justify-between">
									<p class="text-muted-foreground">Glimmer Lamps x 2</p>
									<p>$250,00</p>
								</li>
							</ul>
							<Separator></Separator>
							<ul class="grid gap-3">
								<li class="flex justify-between font-semibold">
									<span class="text-muted-foreground">Total</span>
									<span>$500,00</span>
								</li>
							</ul>
						</div>
					</CardContent>
				</Card>
			</aside>
		</main>
	</div>
</template>

<script setup lang="ts">
import { House, MoreVertical, Package, ReceiptText, Users } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';
import Card from '../ui/card/Card.vue';
import CardContent from '../ui/card/CardContent.vue';
import CardDescription from '../ui/card/CardDescription.vue';
import CardHeader from '../ui/card/CardHeader.vue';
import CardTitle from '../ui/card/CardTitle.vue';
import DropdownMenu from '../ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuContent from '../ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuItem from '../ui/dropdown-menu/DropdownMenuItem.vue';
import DropdownMenuSeparator from '../ui/dropdown-menu/DropdownMenuSeparator.vue';
import DropdownMenuTrigger from '../ui/dropdown-menu/DropdownMenuTrigger.vue';
import Separator from '../ui/separator/Separator.vue';
import Table from '../ui/table/Table.vue';
import TableBody from '../ui/table/TableBody.vue';
import TableCell from '../ui/table/TableCell.vue';
import TableHead from '../ui/table/TableHead.vue';
import TableHeader from '../ui/table/TableHeader.vue';
import TableRow from '../ui/table/TableRow.vue';
</script>
