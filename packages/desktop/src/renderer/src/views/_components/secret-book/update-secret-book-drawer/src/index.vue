<script lang="ts" setup>
import { useSecretBookStore } from '@renderer/stores'
import {
  defaultDataSource,
  type DataSource
} from '@renderer/views/_components/secret-book/update-secret-book-form'

import { message } from '@renderer/shared/deps'
import {
  listenerOpenUpdateSecretBookDrawer,
  emitLoadSecretBookList,
  emitSearchSecretBookDetail
} from '@renderer/shared'
import { lodashFn } from '@common/shared/deps'

defineOptions({ name: 'UpdateSecretBookDrawer', inheritAttrs: false })

const secretBookStore = useSecretBookStore()

const state = reactive<{ dataSource: DataSource; openDrawer: boolean }>({
  dataSource: { ...defaultDataSource },
  openDrawer: false
})

let oldDataSource: DataSource

const onSuccess = () => {
  state.openDrawer = false
  message.success('修改成功')
  // 每次编辑提交都要重新加载密码记录列表
  emitLoadSecretBookList({ secret_category_id: oldDataSource.secretCategoryId ?? '' })
  // 如果没有修改分类，则重新加载详情页信息
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
