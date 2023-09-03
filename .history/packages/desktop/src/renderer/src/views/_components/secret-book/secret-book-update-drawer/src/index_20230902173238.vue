<script lang="ts" setup>
import {
  SecretBookUpdateForm,
  defaultDataSource,
  type DataSource
} from '@renderer/views/_components/secret-book/secret-book-update-form'
import { useSecretBookStore } from '@renderer/stores'
import {
  message,
  listenerOpenUpdateSecretBookDrawer,
  emitClickSecretCategoryMenuItem
} from '@renderer/shared'

import {} from '@common'
defineOptions({ name: 'SecretBookUpdateDrawer', inheritAttrs: false })

const secretBookStore = useSecretBookStore()

const state = reactive<{ dataSource: DataSource; openDrawer: boolean }>({
  dataSource: { ...defaultDataSource },
  openDrawer: false
})

let oldDataSource: DataSource

const onSuccess = () => {
  state.openDrawer = false
  message.success('修改成功')
  console.log('原来的:', oldDataSource.secretCategoryId)
  console.log('心得:', state.dataSource.secretCategoryId)
  // 如果修改了分类，需要重新加载列表
  const isChangeSecretCategoryId =
    oldDataSource.secretCategoryId == state.dataSource.secretCategoryId
  if (isChangeSecretCategoryId) {
    emitClickSecretCategoryMenuItem({ secret_category_id: oldDataSource.secretCategoryId })
  } else {
    ready({ secret_book_id: oldDataSource.id })
  }
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
    remark: secretBookStore.apiSecretBook.remark,
    secretCategoryId: secretBookStore.apiSecretBook.secretCategoryId
  }

  state.openDrawer = true
  oldDataSource = unref(state.dataSource)
}

listenerOpenUpdateSecretBookDrawer(ready)
</script>

<template>
  <div>
    <xl-base-drawer v-model:open="state.openDrawer" :title="state.dataSource.title">
      <secret-book-update-form :data-source="state.dataSource" @success="onSuccess" />
    </xl-base-drawer>
  </div>
</template>

<style lang="scss" scoped></style>
