<script setup lang="ts">
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'LLayoutLeft', inheritAttrs: false })

const { b } = useNamespace('layout-left')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-sider :class="getClass" :style="getStyle" v-bind:="siderProps">
    <b-layout-left />
  </a-layout-sider>
</template>
