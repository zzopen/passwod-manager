<script setup lang="ts">
import { useNamespace } from '@renderer/shared'

defineOptions({
  name: 'LLayoutContent'
})

const { b } = useNamespace('layout-default')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-content :class="getClass">
    <m-page-content />
  </a-layout-content>
</template>

<style scoped lang="scss">
.#{$ns-layout-content} {
  width: '100%';
  height: '100%';
}
</style>
