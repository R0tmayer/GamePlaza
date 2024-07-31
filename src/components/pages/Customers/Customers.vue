<template>
  <div class="flex w-full bg-muted/40 border rounded-lg overflow-hidden">
    <DashboardAsideBar></DashboardAsideBar>
    <main class="p-4 flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription>Analyze customers</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable :data="mockCustomers" :columns="customerColumns"></DataTable>
        </CardContent>

      </Card>
    </main>
  </div>

</template>

<script setup lang="ts">

import {mockCustomers} from "@mocks/mockCustomers.ts";
import {customerColumns} from "@pages/Customers/CustomerColumns.ts";

import DashboardAsideBar from "@custom/DashboardAsideBar.vue";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@shadcn/card";
import DataTable from "@custom/DataTable.vue";
</script>
