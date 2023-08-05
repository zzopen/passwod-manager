<script setup lang="ts">
import { useCls } from '@renderer/composables'
import { globalCls } from '@renderer/styles/module'
import { CSSProperties } from 'vue'
import BLayoutLeft from '@renderer/business/views/components/layout/layout-left'

defineOptions({
  name: 'LLayoutLeft'
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

const { nsCls } = useCls(globalCls.nsLayoutLeft)
const getClass = computed(() => {
  return [nsCls]
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

<style scoped lang="scss">
.#{$ns-layout-left} {
}
</style>
@renderer/hooks
