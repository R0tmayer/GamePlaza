<template>
	<div class="flex items-center space-x-7 text-lg">
		<ProductScreenshot class="w-44"></ProductScreenshot>
		<p class="w-80">Bioshock 2 ´s Den</p>
		<NumberField :default-value="1" :min="1" :max="100" class="w-28">
			<NumberFieldContent>
				<NumberFieldDecrement class="" />
				<NumberFieldInput />
				<NumberFieldIncrement />
			</NumberFieldContent>
		</NumberField>
		<p class="w-20 text-right">$5.99</p>
		<CircleX
			color="rgb(229 231 235)"
			class="cursor-pointer hover:stroke-slate-700"
			size="32"
		></CircleX>
	</div>
</template>

<script setup lang="ts">
import ProductScreenshot from './ProductScreenshot.vue';

import {
	NumberField,
	NumberFieldContent,
	NumberFieldDecrement,
	NumberFieldIncrement,
	NumberFieldInput,
} from '@/components/ui/number-field';
import { CircleX } from 'lucide-vue-next';
</script>
