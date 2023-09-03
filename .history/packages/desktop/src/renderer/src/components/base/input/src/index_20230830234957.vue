<script lang="ts" setup>
import { inputProps } from './props'

defineOptions({ name: 'XlBaseInput', inheritAttrs: false })

defineProps(inputProps())
</script>

<template>
  <a-input v-model:value="value" :placeholder="schema.placeholder" style="width: 200px" />
</template>

<style lang="scss" scoped></style>
