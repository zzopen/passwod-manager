<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import EmptyState from '@renderer/views/_components/empty-state'
import { listenerOpenRightContentPage, listenerRefreshRightContentPage } from '@renderer/shared'

defineOptions({ name: 'CipherRight', inheritAttrs: false })

const { b } = useNamespace('cipher-right')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-content :class="getClass">
    <empty-state />
    <!-- <b-layout-content /> -->
  </a-layout-content>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-right {
}
</style>
