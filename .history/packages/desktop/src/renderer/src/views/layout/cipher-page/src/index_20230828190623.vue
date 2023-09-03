<script setup lang="ts">
import { useNamespace, useCssVar } from '@renderer/shared'
import from '@rendr'
// import BLayoutCenter from '@renderer/business/views/components/layout/layout-center'
// import BLayoutContent from '@renderer/business/views/components/layout/layout-content'
// import { businessCls } from '@renderer/styles/module'

defineOptions({ name: 'XlCipherPage', inheritAttrs: false })

const { b } = useNamespace('cipher-page')
const { cipherPageLeftWidth, cipherPageLeftBgColor } = useCssVar()
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout :class="getClass">
    layout-content

    <a-layout>

    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-page {
  width: 100%;
  height: 100%;
}
</style>
