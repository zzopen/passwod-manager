<template>
  <a-layout-sider v-bind:="layoutSiderProps" :class="getClass">
    <b-layout-left />
  </a-layout-sider>
</template>

<script setup lang="ts">
import BLayoutLeft from '@/business/views/components/layout-left'
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
import { CSSProperties } from 'vue'

defineOptions({
  name: 'LayoutLeft'
})

const layoutSiderStyle: CSSProperties = {
  color: '#fff',
  backgroundColor: '#3f4361'
}

const layoutSiderProps = computed(() => {
  return {
    breakpoint: 'lg',
    collapsible: false,
    trigger: null,
    theme: 'light',
    collapsed: false,
    collapsedWidth: 80,
    width: globalCls.siderWidth
  }
})

const { nsCls } = useCls(globalCls.layoutSiderSider)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<style scoped lang="scss">
.#{$ns-layout-left} {
}
</style>
