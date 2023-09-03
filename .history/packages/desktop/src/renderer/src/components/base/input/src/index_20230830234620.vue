<script lang="ts" setup>
import { inputProps } from './props'
defineOptions({ name: 'XlBaseInput', inheritAttrs: false })
</script>

<template>
  <a-input v-model:value="value" :placeholder="formItem.placeholder" style="width: 200px" />
</template>

<style lang="scss" scoped></style>
