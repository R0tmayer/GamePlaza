<script setup lang="ts">

defineProps<{
  placeholder: string,
  values: { value: string, label: string }[]
}>()


import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@shadcn/select";
</script>

<template>
  <Select>
    <SelectTrigger>
      <SelectValue :placeholder="placeholder"/>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="item in values" :key="item.value" :value="item.value">
          {{ item.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

