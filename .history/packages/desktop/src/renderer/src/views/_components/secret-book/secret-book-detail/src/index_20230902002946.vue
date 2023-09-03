<script lang="ts" setup>
import { useSecretBookStore } from '@renderer/stores'
import type { DataSource } from './props'
import { defaultDataSource } from './props'

defineOptions({ name: 'SecretBookDetail', inheritAttrs: false })
const secretBookStore = useSecretBookStore()

const state = reactive<{ dataSource: DataSource }>({
  dataSource: { ...defaultDataSource }
})
const onUpdate = () => {
  secretBookStore.setUpdateSecretBookId(secretBookStore.secretBookId)
}
</script>

<template>
  <div class="right-content">
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
  </div>
</template>

<style lang="scss" scoped></style>
