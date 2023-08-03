<script setup lang="ts">
import BLayoutLeft from '@/business/views/components/layout-left'
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
import { CSSProperties } from 'vue'

defineOptions({
  name: 'LayoutLeft'
})

const layoutSiderProps = computed(() => {
  return {
    breakpoint: 'lg',
    collapsible: false,
    trigger: null,
    theme: 'light',
    collapsed: false,
    collapsedWidth: 80
  }
})

const { nsCls } = useCls(globalCls.nsLayoutLeft)
const getClass = computed(() => {
  return [nsCls]
})

const getStyle = computed<CSSProperties>(() => {
  return {
    color: globalCls.nsLayoutLeftColor,
    width: globalCls.nsLayoutLeftWidth,
    backgroundColor: globalCls.nsLayoutLeftBackgroundColor
  }
})
</script>

<template>
  <a-layout-sider v-bind:="layoutSiderProps" :style="getStyle" :class="getClass">
    <b-layout-left />
  </a-layout-sider>
</template>

<style scoped lang="scss">
.#{$ns-layout-left} {
  overflow: 'auto';
  height: '100vh';
  position: 'fixed';
  left: 0;
  top: 0;
  bottom: 0;
}
</style>
