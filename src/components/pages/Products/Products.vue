<template>
  <main class="flex-1 p-4 w-full bg-muted/40">
    <Card>
      <CardHeader>
        <CardTitle class="flex justify-between">
          <p>Products</p>
          <Input type="text" placeholder="Search product" class="max-w-xs"/>
        </CardTitle>
        <CardDescription>Manage products</CardDescription>
      </CardHeader>
      <CardContent>
        <TableData :columns="productColumns" :data="store.products">
        </TableData>
      </CardContent>
    </Card>
  </main>


</template>

<script setup lang="ts">
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@shadcn/card';

import TableData from '@custom/DataTable.vue'

import {productColumns} from '@pages/Products/ProductColumns.ts'
import {useProductStore} from "@/stores/useProductStore.ts";
import Input from "../../ui/input/Input.vue";

const store = useProductStore();
</script>

