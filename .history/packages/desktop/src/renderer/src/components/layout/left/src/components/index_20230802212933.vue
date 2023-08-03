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
    collapsedWidth: 80,
    width: globalCls.nsLayoutLeftWidth
  }
})

const { nsCls } = useCls(globalCls.nsLayoutLeft)
const getClass = computed(() => {
  return [nsCls]
})

const getStyle = computed(() => {})
</script>

<template>
  <a-layout-sider v-bind:="layoutSiderProps" :style="getStyle" :class="getClass">
    <b-layout-left />
  </a-layout-sider>
</template>

<style scoped lang="scss">
.#{$ns-layout-left} {
  color: '#fff';
  background-color: '#3f4361';
}
</style>
