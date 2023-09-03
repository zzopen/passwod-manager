<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import { useRequestStore, useSecretBookStore } from '@renderer/stores'

import EmptyState from '@renderer/views/_components/empty-state'
import {
  SecretBookDetail,
  type SecretBookDetailProps
} from '@renderer/views/_components/secret-book/secret-book-detail'

defineOptions({ name: 'CipherRight', inheritAttrs: false })

const requestStore = useRequestStore()
const secretBookStore = useSecretBookStore()
const { b } = useNamespace('cipher-right')
const getClass = computed(() => {
  return [b()]
})

watch(
  () => secretBookStore.secretBookId,
  (newVal) => {
    if (!newVal || newVal == '') {
      openSecretBookDetailPageRef.value = false
    } else {
      openSecretBookDetailPage({ id: newVal })
    }
  }
)

const openSecretBookDetailPageRef = ref(false)
const secretBookDetailProps = ref<SecretBookDetailProps>({})
const openSecretBookDetailPage = async (p: { id: string }) => {
  const res = await requestStore.getSecretBookDetail(p)
  if (!res) {
    return
  }

  secretBookDetailProps.value = res

  openSecretBookDetailPageRef.value = true
}
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
