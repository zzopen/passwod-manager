<script setup lang="ts">
defineOptions({
  name: 'RightContent',
  inheritAttrs: false
})
</script>

<template>
  <div class="right-content">
    <div>标题</div>
    <a-descriptions bordered title="Custom Size" :size="size" :column="1">
      <template #extra>
        <a-button type="primary">Edit</a-button>
      </template>
      <a-descriptions-item label="网址">www.baidu.com</a-descriptions-item>
      <a-descriptions-item label="账号">xl123456</a-descriptions-item>
      <a-descriptions-item label="密码">123456??</a-descriptions-item>
      <a-descriptions-item label="邮箱">373045134@qq.com</a-descriptions-item>
      <a-descriptions-item label="手机号">$80.00</a-descriptions-item>

      <a-descriptions-item label="Official">$60.00</a-descriptions-item>
      <a-descriptions-item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
