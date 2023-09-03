<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import { SecretBookDetail } from '@renderer/views/_components/secret-book/secret-book-detail'

defineOptions({ name: 'CipherRight', inheritAttrs: false })

const { b } = useNamespace('cipher-right')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-content :class="getClass">
    <secret-book-detail />
  </a-layout-content>
</template>

<style lang="scss" scoped></style>
