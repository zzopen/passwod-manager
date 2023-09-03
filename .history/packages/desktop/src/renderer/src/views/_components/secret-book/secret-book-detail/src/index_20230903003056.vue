<script lang="ts" setup>
import { useSecretBookStore, useRequestStore } from '@renderer/stores'
import type { DataSource } from './props'
import { defaultDataSource } from './props'
import EmptyState from '@renderer/views/_components/empty-state'
import {
  listenerClickSecretBookListItem,
  listenerClickSecretCategoryMenuItem,
  emitOpenUpdateSecretBookDrawer,
  message,
  Modal,
  ExclamationCircleOutlined
} from '@renderer/shared'

defineOptions({ name: 'SecretBookDetail', inheritAttrs: false })
const secretBookStore = useSecretBookStore()
const requestStore = useRequestStore()

const state = reactive<{ dataSource: DataSource; showEmptyStatus: boolean }>({
  dataSource: { ...defaultDataSource },
  showEmptyStatus: true
})

const reset = () => {
  state.showEmptyStatus = true
  state.dataSource = { ...defaultDataSource }
}

const ready = async (p: { secret_book_id: string }) => {
  await secretBookStore.loadSecretBook({ id: p.secret_book_id })
  if (!secretBookStore.apiSecretBook) {
    message.error('查询数据失败')
    state.showEmptyStatus = true
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
    secretCategoryName: secretBookStore.apiSecretBook.secretCategoryName
  }

  state.showEmptyStatus = false
}

listenerClickSecretCategoryMenuItem(reset)
listenerClickSecretBookListItem(ready)

const onUpdate = () => {
  emitOpenUpdateSecretBookDrawer({ secret_book_id: state.dataSource.id })
}

const onDelete = () => {
  Modal.confirm({
    title: '确认要删除该记录吗？',
    icon: h(ExclamationCircleOutlined),
    content: h('div', { style: 'color:red;' }, '请谨慎选择'),
    async onOk() {
      await requestStore.deleteSecretBook({ id: state.dataSource })
    }
  })
}
</script>

<template>
  <div class="secret-book-detail">
    <empty-state v-if="state.showEmptyStatus" />
    <template v-else>
      <a-descriptions bordered :title="state.dataSource.title" :column="1">
        <template #extra>
          <a-button type="primary" @click="onUpdate">修改</a-button>
          <a-button type="primary" danger @click="onDelete">删除</a-button>
        </template>
        <a-descriptions-item label="标题">{{ state.dataSource.title }}</a-descriptions-item>
        <a-descriptions-item label="所属分类">{{
          state.dataSource.secretCategoryName
        }}</a-descriptions-item>
        <a-descriptions-item label="网址">{{ state.dataSource.website }}</a-descriptions-item>
        <a-descriptions-item label="账号">{{ state.dataSource.username }}</a-descriptions-item>
        <a-descriptions-item label="密码">{{ state.dataSource.password }}</a-descriptions-item>
        <a-descriptions-item label="邮箱">{{ state.dataSource.email }}</a-descriptions-item>
        <a-descriptions-item label="手机号">{{ state.dataSource.mobile }}</a-descriptions-item>
        <a-descriptions-item label="备注">{{ state.dataSource.remark }}</a-descriptions-item>
      </a-descriptions>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
