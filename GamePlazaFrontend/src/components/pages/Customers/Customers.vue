<template>
  <main class="flex-1 w-full bg-muted/40 p-4">
    <Card>
      <CardHeader>
        <CardTitle class="flex justify-between">
          <p>Customers</p>
          <Input type="text" placeholder="Search customer" class="max-w-xs"/>
        </CardTitle>
        <CardDescription>Analyze customers</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable :columns="customerColumns" :data="store.customers"></DataTable>
      </CardContent>
    </Card>
  </main>
</template>

<script setup lang="ts">

import {useCustomerStore} from "@/stores/useCustomerStore.ts";
import {customerColumns} from "@pages/Customers/CustomerColumns.ts";

const store = useCustomerStore();
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@shadcn/card";
import DataTable from "@custom/DataTable.vue";
import Input from "../../ui/input/Input.vue";
</script>
