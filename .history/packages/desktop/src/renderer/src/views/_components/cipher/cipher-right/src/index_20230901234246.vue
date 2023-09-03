<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import { useRequestStore, useSecretBookStore } from '@renderer/stores'
import EmptyState from '@renderer/views/_components/empty-state'
import {
  SecretBookDetail,
  type DataSource,
  defaultDataSource
} from '@renderer/views/_components/secret-book/secret-book-detail'
// import { listenerRefreshSecretBookDetailPage } from '@renderer/shared'

defineOptions({ name: 'CipherRight', inheritAttrs: false })

const requestStore = useRequestStore()
const secretBookStore = useSecretBookStore()

const { b } = useNamespace('cipher-right')
const getClass = computed(() => {
  return [b()]
})

const state = reactive<{ secretBookDetailOpen: boolean; secretBookDetailDataSource: DataSource }>({
  secretBookDetailOpen: false,
  secretBookDetailDataSource: {
    ...defaultDataSource
  }
})

watch(
  () => secretBookStore.secretBookId,
  async (newVal) => {
    if (!newVal || newVal == '') {
      state.secretBookDetailOpen = false
    } else {
      await openSecretBookDetailPage({ id: newVal })
    }
  }
)

const openSecretBookDetailPage = async (p: { id: string }) => {
  const res = await requestStore.getSecretBookDetail(p)
  if (!res) {
    return
  }

  state.secretBookDetailDataSource = res
  state.secretBookDetailOpen = true
}

// listenerRefreshSecretBookDetailPage(async () => {
//   await openSecretBookDetailPage({ id: secretBookStore.secretBookId })
// })
</script>

<template>
  <a-layout-content :class="getClass">
    <empty-state v-if="!state.secretBookDetailOpen" />
    <secret-book-detail
      v-if="state.secretBookDetailOpen"
      :data-source="state.secretBookDetailDataSource"
    />
  </a-layout-content>
</template>

<style lang="scss" scoped></style>
