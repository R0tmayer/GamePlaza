<template>
  <div class="flex w-full bg-muted/40">
    <main class="p-4 flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Manage products</CardDescription>
        </CardHeader>
        <CardContent>
          <TableData :columns="productColumns" :data="  mockProducts">
          </TableData>
        </CardContent>
      </Card>
    </main>
  </div>
</template>

<script setup lang="ts">
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@shadcn/card';

import TableData from '@custom/DataTable.vue'

import {productColumns} from '@pages/Products/ProductColumns.ts'
import {mockProducts} from '@mocks/mockProducts.ts'
</script>

