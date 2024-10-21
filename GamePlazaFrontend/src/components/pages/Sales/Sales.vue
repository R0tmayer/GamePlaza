<template>
  <div class="flex w-full bg-muted/40 ">
    <main class="grid grid-cols-10 flex-1 p-4 gap-4">
      <section class="grid auto-rows-max col-span-7 gap-4">
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
            <CardTitle class="flex justify-between">
              <p>Sales</p>
              <Input type="text" placeholder="Search sale" class="max-w-xs"/>
            </CardTitle>
            <CardDescription>Recent sales</CardDescription>
          </CardHeader>
          <CardContent>
            <TableData :columns="saleColumns" :data="store.sales">
            </TableData>
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
                  <DropdownMenuSeparator/>
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

<script lang="ts" setup>
import Button from '@shadcn/button/Button.vue';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@shadcn/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shadcn/dropdown-menu';
import Separator from '@shadcn/separator/Separator.vue';

import TableData from '@custom/DataTable.vue'

import {MoreVertical} from 'lucide-vue-next';
import {saleColumns} from '@pages/Sales/SaleColumns.ts'
import {useSaleStore} from "@/stores/useSaleStore.ts";
import {Input} from "@shadcn/input";

const store = useSaleStore();
</script>
