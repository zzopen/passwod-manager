<script lang="ts" setup>
import {
  SecretBookUpdateForm,
  defaultDataSource,
  type DataSource
} from '@renderer/views/_components/secret-book/secret-book-update-form'
import { useSecretBookStore } from '@renderer/stores'
import { message, listenerOpenUpdateSecretBookDrawer } from '@renderer/shared'

defineOptions({ name: 'SecretBookUpdateDrawer', inheritAttrs: false })

const secretBookStore = useSecretBookStore()

const state = reactive<{ dataSource: DataSource; openDrawer: boolean }>({
  dataSource: { ...defaultDataSource },
  openDrawer: false
})

const onSubmit = () => {
  message.success('修改成功')
  state.openDrawer = false
  // emitRefreshSecretBookDetailPage()
}

const ready = async (p: { secret_book_id: string }) => {
  await secretBookStore.loadSecretBook({ id: p.secret_book_id })
  if (!secretBookStore.apiSecretBook) {
    message.error('加载数据失败')
    return
  }

  state.dataSource = {
    id: secretBookStore.apiSecretBook.id,
    title: secretBookStore.apiSecretBook.title,
    website: secretBookStore.apiSecretBook.website,
    username: secretBookStore.apiSecretBook.username,
    password: secretBookStore.apiSecretBook.password,
    email: secretBookStore.apiSecretBook.email,
    mobile: secretBookStore.apiSecretBook.mobile,
    remark: secretBookStore.apiSecretBook.remark
  }

  state.openDrawer = true
}

listenerOpenUpdateSecretBookDrawer(ready)
</script>

<template>
  <div>
    <xl-base-drawer v-model:open="state.openDrawer" :title="state.dataSource.title">
      <secret-book-update-form :data-source="state.dataSource" @success="onSubmit" />
    </xl-base-drawer>
  </div>
</template>

<style lang="scss" scoped></style>
