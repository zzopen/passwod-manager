<script setup lang="ts">
import { useNamespace } from '@renderer/shared'

// import { CSSProperties } from 'vue'
// import BLayoutCenter from '@renderer/business/views/components/layout/layout-center'
// import BLayoutContent from '@renderer/business/views/components/layout/layout-content'
// import { businessCls } from '@renderer/styles/module'

defineOptions({
  name: 'LayoutContent',
  inheritAttrs: false
})

const { b } = useNamespace('layout-content')
const getClass = computed(() => {
  return [b()]
})

// const contentStyle = computed<CSSProperties>(() => {
//   return {}
// })

// const siderProps = computed(() => {
//   return {
//     width: businessCls.bLayoutRightSiderWidth
//   }
// })

// const siderStyle = computed<CSSProperties>(() => {
//   return {
//     height: '100%',
//     backgroundColor: businessCls.bLayoutRightSiderBackgroundColor
//   }
// })
</script>

<template>
  <a-layout :class="getClass">
    layout-content
    <!-- <a-layout-sider :style="siderStyle" v-bind="siderProps">
      <b-layout-center />
    </a-layout-sider>
    <a-layout style="width: 100%; height: 100%">
      <a-layout-content :style="contentStyle">
        <b-layout-content />
      </a-layout-content>
    </a-layout> -->
  </a-layout>
</template>

<style lang="scss" scoped>
.#{$b-ns}-layout-conetnt {
  width: 100%;
  height: 100%;
}
</style>
