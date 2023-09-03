<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import EmptyState from '@renderer/views/_components/empty-state'
import SecretBookDetail from '@renderer/views/_components/secret-book/secret-book-detail'

defineOptions({ name: 'CipherRight', inheritAttrs: false })

const { b } = useNamespace('cipher-right')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-content :class="getClass">
    <empty-state v-if="!openSecretBookDetailPageRef" />
    <secret-book-detail v-if="openSecretBookDetailPageRef" />
  </a-layout-content>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-right {
}
</style>
