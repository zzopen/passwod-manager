<script setup lang="ts">
import { useNamespace, useCssVar } from '@renderer/shared'

// import { CSSProperties } from 'vue'
// import BLayoutCenter from '@renderer/business/views/components/layout/layout-center'
// import BLayoutContent from '@renderer/business/views/components/layout/layout-content'
// import { businessCls } from '@renderer/styles/module'

defineOptions({
  name: 'XlCipherPage',
  inheritAttrs: false
})

const { b } = useNamespace('cipher-page')
const { cipherPageLeftWidth } = useCssVar()
const getClass = computed(() => {
  return [b()]
})

// const contentStyle = computed<CSSProperties>(() => {
//   return {}
// })

const siderProps = computed(() => {
  return {
    width: cipherPageLeftWidth
  }
})

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
    <a-layout-sider :style="siderStyle" v-bind="siderProps">
      <b-layout-center />
    </a-layout-sider>
    <a-layout>
      <a-layout-content :style="contentStyle">
        <b-layout-content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-page {
  width: 100%;
  height: 100%;
}
</style>
