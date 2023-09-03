<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'LLayoutContent', inheritAttrs: false })

const { b } = useNamespace('layout-content')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-content :class="getClass">
    <m-page-content />
  </a-layout-content>
</template>
