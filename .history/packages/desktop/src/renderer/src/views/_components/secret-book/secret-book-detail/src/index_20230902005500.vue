<script lang="ts" setup>
import { useSecretBookStore } from '@renderer/stores'
import type { DataSource } from './props'
import { defaultDataSource } from './props'
import EmptyState from '@renderer/views/_components/empty-state'
import { listenerClickSecretBookListItem } from '@renderer/shared'

defineOptions({ name: 'SecretBookDetail', inheritAttrs: false })
const secretBookStore = useSecretBookStore()

const state = reactive<{ dataSource: DataSource; showEmptyStatus: boolean }>({
  dataSource: { ...defaultDataSource },
  showEmptyStatus: true
})

const dataSource = toRef(state.dataSource)

const ready = async (p: { secret_book_id: string }) => {
  console.log('p:', p)
  await secretBookStore.loadSecretBook({ id: p.secret_book_id })

  if (!secretBookStore.apiSecretBook) {
    state.showEmptyStatus = true
    return
  }

  dataSource.value = {
    title: secretBookStore.apiSecretBook.title,
    website: secretBookStore.apiSecretBook.website,
    username: secretBookStore.apiSecretBook.username,
    password: secretBookStore.apiSecretBook.password,
    email: secretBookStore.apiSecretBook.email,
    mobile: secretBookStore.apiSecretBook.mobile,
    remark: secretBookStore.apiSecretBook.remark
  }

  state.showEmptyStatus = false
}

listenerClickSecretBookListItem(ready)

const onUpdate = () => {
  //secretBookStore.setUpdateSecretBookId(secretBookStore.secretBookId)
}
</script>

<template>
  <div class="secret-book-detail">
    <empty-state v-if="state.showEmptyStatus" />
    <template v-else>
      <a-descriptions bordered :title="dataSource.title" :column="1">
        <template #extra>
          <a-button type="primary" @click="onUpdate">修改</a-button>
          <a-button type="primary">删除</a-button>
        </template>
        <a-descriptions-item label="标题">{{ dataSource.title }}</a-descriptions-item>
        <a-descriptions-item label="网址">{{ dataSource.website }}</a-descriptions-item>
        <a-descriptions-item label="账号">{{ dataSource.username }}</a-descriptions-item>
        <a-descriptions-item label="密码">{{ dataSource.password }}</a-descriptions-item>
        <a-descriptions-item label="邮箱">{{ dataSource.email }}</a-descriptions-item>
        <a-descriptions-item label="手机号">{{ dataSource.mobile }}</a-descriptions-item>
      </a-descriptions>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
