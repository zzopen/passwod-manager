<script lang="ts" setup>
import { useEventStore } from '@renderer/stores'
import { secretBookDetailProps } from './props'

defineOptions({ name: 'SecretBookDetail', inheritAttrs: false })

const eventStore = useEventStore()
defineProps(secretBookDetailProps())

const handleUpdate = () => {
  eventStore.openUpdateAccountDrawer({ id: unref(0) })
}
</script>

<template>
  <div class="right-content">
    <div>{{ title }}</div>
    <a-descriptions bordered title="Custom Size" :column="1">
      <template #extra>
        <a-button type="primary" @click="handleUpdate">修改</a-button>
        <a-button type="primary">删除</a-button>
      </template>
      <a-descriptions-item label="网址">{{ website }}</a-descriptions-item>
      <a-descriptions-item label="账号">{{ account }}</a-descriptions-item>
      <a-descriptions-item label="密码">{{ password }}</a-descriptions-item>
      <a-descriptions-item label="邮箱">{{ email }}</a-descriptions-item>
      <a-descriptions-item label="手机号">{{ mobile }}</a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<style lang="scss" scoped></style>
