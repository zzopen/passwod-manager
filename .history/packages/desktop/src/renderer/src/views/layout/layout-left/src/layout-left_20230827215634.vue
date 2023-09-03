<script setup lang="ts">
import { useNamespace, useCssVar } from '@renderer/shared'
import BLayoutLeft from '@renderer/business/views/components/layout/layout-left'

defineOptions({ name: 'LLayoutLeft', inheritAttrs: false })

const { b } = useNamespace('layout-left')
const { layoutLeftWidth, layoutLeftColor } = useCssVar()
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
    width: layoutLeftWidth
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
<style lang="scss" scoped>
.#{$b-ns}-layout-left {
  height: '100%';
  color: v-bind('layoutLeftColor');
  backgroundcolor: v-bind('layoutLeftBgColor');
}
</style>
