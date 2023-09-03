<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import { useRequestStore } from '@renderer/stores'

import EmptyState from '@renderer/views/_components/empty-state'
import {
  SecretBookDetail,
  type SecretBookDetailProps
} from '@renderer/views/_components/secret-book/secret-book-detail'

import { listenerOpenSecretBookDetailPage } from '@renderer/shared'

defineOptions({ name: 'CipherRight', inheritAttrs: false })

const requestStore = useRequestStore()
const { b } = useNamespace('cipher-right')
const getClass = computed(() => {
  return [b()]
})

const openSecretBookDetailPageRef = ref(false)
const secretBookDetailProps: SecretBookDetailProps = reactive({})
const openSecretBookDetailPage = async (p: { id: string }) => {
  const res = await requestStore.getSecretBookDetail(p)
  openSecretBookDetailPageRef.value = true
}

listenerOpenSecretBookDetailPage(openSecretBookDetailPage)
</script>

<template>
  <a-layout-content :class="getClass">
    <empty-state v-if="!openSecretBookDetailPageRef" />
    <secret-book-detail v-if="openSecretBookDetailPageRef" v-bind="secretBookDetailProps" />
  </a-layout-content>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-right {
}
</style>
