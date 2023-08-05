<script setup lang="ts">
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'LLayoutLeft', inheritAttrs: false })

const { b } = useNamespace('layout-left')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass"></div>
</template>
