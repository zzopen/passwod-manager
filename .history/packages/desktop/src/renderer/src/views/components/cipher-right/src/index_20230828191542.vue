<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'XlCipherLeft', inheritAttrs: false })

const { b } = useNamespace('cipher-page')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-content>
    <b-layout-content />
  </a-layout-content>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-left {
}
</style>
