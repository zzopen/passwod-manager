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
  emitLoadSecretBookList,
  emitSearchSecretBookDetail
} from '@renderer/shared'

import { lodashFn } from '@common/deps'

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
  emitLoadSecretBookList({ secret_category_id: oldDataSource.secretCategoryId ?? '' })
  // 如果修改了分类，需要重新加载列表
  const isChangeSecretCategoryId =
    oldDataSource.secretCategoryId != state.dataSource.secretCategoryId
  if (!isChangeSecretCategoryId) {
    emitSearchSecretBookDetail({ secret_book_id: oldDataSource.id })
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

  // 为了处理select组件不显示placeholder的情况
  if (
    secretBookStore.apiSecretBook.secretCategoryId == '' ||
    secretBookStore.apiSecretBook.secretCategoryId == '0'
  ) {
    state.dataSource.secretCategoryId = undefined
  }

  state.openDrawer = true
  oldDataSource = lodashFn.cloneDeep(unref(state.dataSource))
}

listenerOpenUpdateSecretBookDrawer(ready)
</script>

<template>
  <div>
    <xl-base-drawer v-model:open="state.openDrawer" :title="state.dataSource.title">
      <secret-book-update-form v-model:dataSource="state.dataSource" @success="onSuccess" />
    </xl-base-drawer>
  </div>
</template>

<style lang="scss" scoped></style>
