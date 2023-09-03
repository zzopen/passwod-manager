<script setup lang="ts">
import { useNamespace, useCssVar } from '@renderer/shared'
import { CSSProperties } from 'vue'

defineOptions({ name: 'XlCipherLeft', inheritAttrs: false })

const { b } = useNamespace('cipher-page')
const { cipherPageLeftWidth, cipherPageLeftBgColor } = useCssVar()
const getClass = computed(() => {
  return [b()]
})

const contentStyle = computed<CSSProperties>(() => {
  return {}
})

const siderProps = computed(() => {
  return {
    width: cipherPageLeftWidth
  }
})

const siderStyle = computed<CSSProperties>(() => {
  return {
    height: '100%',
    backgroundColor: cipherPageLeftBgColor
  }
})
</script>

<template>
  <a-layout-sider :style="siderStyle" v-bind="siderProps">
    <b-layout-center />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
