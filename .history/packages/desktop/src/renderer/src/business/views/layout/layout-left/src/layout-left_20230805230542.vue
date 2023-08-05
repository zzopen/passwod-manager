<script setup lang="ts">
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'LLayoutLeft', inheritAttrs: false })

const { b } = useNamespace('layout-left')
const getClass = computed(() => {
  return [b()]
})

const siderProps = computed(() => {
  return {
    breakpoint: 'lg',
    collapsible: false,
    trigger: null,
    theme: 'light',
    collapsed: false,
    collapsedWidth: 80,
    width: globalCls.nsLayoutLeftWidth
  }
})

const getStyle = computed<CSSProperties>(() => {
  return {
    height: '100%',
    color: globalCls.nsLayoutLeftColor,
    backgroundColor: globalCls.nsLayoutLeftBackgroundColor
  }
})
</script>

<template>
  <a-layout-sider :class="getClass" :style="getStyle" v-bind:="siderProps">
    <b-layout-left />
  </a-layout-sider>
</template>
