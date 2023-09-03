<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import CipherLeft from '@renderer/views/_components/cipher/cipher-left'
import CipherRight from '@renderer/views/_components/cipher/cipher-right'

defineOptions({ name: 'XlCipherPage', inheritAttrs: false })

const { b } = useNamespace('cipher-page')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout :class="getClass">
    <cipher-left />
    <a-layout>
      <cipher-right />
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-page {
  width: 100%;
  height: 100%;
}
</style>
