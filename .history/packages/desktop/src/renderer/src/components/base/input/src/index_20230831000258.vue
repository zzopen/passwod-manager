<script lang="ts" setup>
import { inputProps } from './props'

defineOptions({ name: 'XlBaseInput', inheritAttrs: false })

defineProps(inputProps())
defineEmits(['update:value'])

const inputValue = computed(() => {
  
})
</script>

<template>
  <a-input v-model:value="value" :placeholder="schema.placeholder" :style="schema.style" />
</template>

<style lang="scss" scoped></style>
