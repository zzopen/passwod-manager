<script setup lang="ts">
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'LLayoutDefault', inheritAttrs: false })

const { b } = useNamespace('layout-default')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass"></div>
</template>
