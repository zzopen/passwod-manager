<script setup lang="ts">
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'LLayoutContent', inheritAttrs: false })

const { b } = useNamespace('layout-content')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass"></div>
</template>
