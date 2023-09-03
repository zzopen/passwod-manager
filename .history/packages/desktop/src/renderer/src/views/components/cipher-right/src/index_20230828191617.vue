<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'XlCipherRight', inheritAttrs: false })

const { b } = useNamespace('cipher-right')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-content :class="getClass">
    cipher-right
    <!-- <b-layout-content /> -->
  </a-layout-content>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-right {
}
</style>
