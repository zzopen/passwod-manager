<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import EmptyState from '@renderer/views/_components/empty-state'
import { listenerOpenSecretBookDetailPage } from '@renderer/shared'

defineOptions({ name: 'CipherRight', inheritAttrs: false })

const { b } = useNamespace('cipher-right')
const getClass = computed(() => {
  return [b()]
})

const open = ref(false)
const openPage = async (p: { id: string }) => {
  open.value = true
}

listenerOpenSecretBookDetailPage(openPage)
</script>

<template>
  <a-layout-content :class="getClass">
    <empty-state />
    <!-- <b-layout-content /> -->
  </a-layout-content>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-right {
}
</style>
