<template>
  <Card class="flex-1 p-4 w-full bg-muted/40">
    <CardHeader>
      <CardTitle>Customers</CardTitle>
      <CardDescription>Analyze customers</CardDescription>
    </CardHeader>
    <CardContent>
      <DataTable :data="mockCustomers" :columns="customerColumns"></DataTable>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">

import {mockCustomers} from "@mocks/mockCustomers.ts";
import {customerColumns} from "@pages/Customers/CustomerColumns.ts";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@shadcn/card";
import DataTable from "@custom/DataTable.vue";
</script>
