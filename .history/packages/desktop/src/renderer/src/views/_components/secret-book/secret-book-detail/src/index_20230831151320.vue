<script lang="ts" setup>
import { useSecretBookStore } from '@renderer/stores'
import { secretBookDetailProps } from './props'

defineOptions({ name: 'SecretBookDetail', inheritAttrs: false })

const secretBookStore = useSecretBookStore()
defineProps(secretBookDetailProps())

const onUpdate = () => {
  secretBookStore.setUpdateSecretBookId(secretBookStore.secretBookId)
}
</script>

<template>
  <div class="right-content">
    <div>{{ dataSource.title }}</div>
    <a-descriptions bordered title="Custom Size" :column="1">
      <template #extra>
        <a-button type="primary" @click="onUpdate">修改</a-button>
        <a-button type="primary">删除</a-button>
      </template>
      <a-descriptions-item label="网址">{{ dataSource.website }}</a-descriptions-item>
      <a-descriptions-item label="账号">{{ dataSource.username }}</a-descriptions-item>
      <a-descriptions-item label="密码">{{ dataSource.password }}</a-descriptions-item>
      <a-descriptions-item label="邮箱">{{ dataSource.email }}</a-descriptions-item>
      <a-descriptions-item label="手机号">{{ dataSource.mobile }}</a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<style lang="scss" scoped></style>
