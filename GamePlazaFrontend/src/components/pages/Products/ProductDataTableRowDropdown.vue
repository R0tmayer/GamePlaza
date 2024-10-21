<script setup lang="ts">
import {MoreHorizontal} from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@shadcn/dropdown-menu'
import {Button} from '@shadcn/button'

defineProps<{
  product: {
    id: string
  }
}>()

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <MoreHorizontal class="w-4 h-4"/>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
      <DropdownMenuItem>Archive</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>