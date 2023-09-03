<script lang="ts" setup>
import { useNamespace, useCssVar } from '@renderer/shared'
import CategoryList from '@renderer/views/category/category-list'
import XlAppLogo from '@renderer/views/components/app-logo'

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
    <app-logo />
    <category-list />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.#{$b-ns}-layout-left {
  height: '100%';
  color: v-bind('layoutLeftColor');
  background-color: v-bind('layoutLeftBgColor');
}
</style>
