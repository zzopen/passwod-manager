<script lang="ts" setup>
import { useNamespace, useCssVar } from '@renderer/shared'
// import BLayoutLeft from '@renderer/business/views/components/layout/layout-left'

defineOptions({ name: 'XlLayoutLeft', inheritAttrs: false })

const { b } = useNamespace('layout-left')
const { layoutLeftWidth, layoutLeftColor, layoutLeftBgColor } = useCssVar()
const getClass = computed(() => {
  return [b()]
})

const layoutSiderProps = computed(() => {
  return {
    breakpoint: 'lg',
    collapsible: false,
    trigger: null,
    theme: 'light',
    collapsed: false,
    collapsedWidth: 80,
    width: layoutLeftWidth
  }
})
</script>

<template>
  <a-layout-sider :class="getClass" v-bind:="layoutSiderProps">
    layout-left
    <!-- <b-layout-left /> -->
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.#{$b-ns}-layout-left {
  height: '100%';
  color: v-bind('layoutLeftColor');
  background-color: v-bind('layoutLeftBgColor');
}
</style>
