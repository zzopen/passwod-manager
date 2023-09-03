<script lang="ts" setup>
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
</script>

<template>
  <a-layout-sider :class="getClass" v-bind="siderProps">
    <b-layout-center />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-left {
  height: '100%';
  background-color: v-bind('cipherPageLeftBgColor');
}
</style>
