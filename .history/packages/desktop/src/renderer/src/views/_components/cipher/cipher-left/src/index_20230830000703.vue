<script lang="ts" setup>
import { useNamespace, useCssVar } from '@renderer/shared'

defineOptions({ name: 'CipherLeft', inheritAttrs: false })

const { b } = useNamespace('cipher-left')
const { cipherLeftWidth, cipherLeftBgColor } = useCssVar()
const getClass = computed(() => {
  return [b()]
})

const siderProps = computed(() => {
  return {
    width: cipherLeftWidth
  }
})
</script>

<template>
  <a-layout-sider :class="getClass" v-bind="siderProps">
    cipher-left
    <!-- <b-layout-center /> -->
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-left {
  height: '100%';
  background-color: v-bind('cipherLeftBgColor');
}
</style>
