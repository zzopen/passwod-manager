<script lang="ts" setup>
import {
  SecretBookUpdateForm,
  defaultDataSource
} from '@renderer/views/_components/secret-book/secret-book-update-form'
import { useRequestStore, useSecretBookStore } from '@renderer/stores'
import { message, listenerOpenUpdateSecretBookDrawer } from '@renderer/shared'

defineOptions({ name: 'SecretBookUpdateDrawer', inheritAttrs: false })

const requestStore = useRequestStore()
const secretBookStore = useSecretBookStore()

const openDrawerRef = ref(false)

const state = reactive({
  dataSource: { ...defaultDataSource }
})

watch(
  () => secretBookStore.updateSecretBookId,
  async (newVal) => {
    console.log('newVal:', newVal)
    if (!newVal || newVal == '') {
      openDrawerRef.value = false
    } else {
      const res = await requestStore.getSecretBookDetail({ id: newVal })
      if (!res) {
        return
      }

      state.dataSource = {
        id: res.id,
        title: res.title,
        website: res.website,
        username: res.username,
        password: res.password
      }

      openDrawerRef.value = true
    }
  }
)

const onSubmit = () => {
  message.success('修改成功')
  openDrawerRef.value = false
  // emitRefreshSecretBookDetailPage()
}

const ready = (p: { secret_book_id: string }) => {}

listenerOpenUpdateSecretBookDrawer(ready)
</script>

<template>
  <div>
    <xl-base-drawer v-model:open="openDrawerRef" :title="state.dataSource.title">
      <secret-book-update-form :data-source="state.dataSource" @success="onSubmit" />
    </xl-base-drawer>
  </div>
</template>

<style lang="scss" scoped></style>
