<script setup lang="ts">
defineOptions({
  name: 'RightContent',
  inheritAttrs: false
})
</script>

<template>
  <div class="right-content">
    <div>标题占位</div>
    <a-descriptions bordered title="Custom Size" :column="1">
      <template #extra>
        <a-button type="primary">修改</a-button>
        <a-button type="primary">删除</a-button>
      </template>
      <a-descriptions-item label="网址">www.baidu.com</a-descriptions-item>
      <a-descriptions-item label="账号">xl123456</a-descriptions-item>
      <a-descriptions-item label="密码">123456??</a-descriptions-item>
      <a-descriptions-item label="邮箱">373045134@qq.com</a-descriptions-item>
      <a-descriptions-item label="手机号">1881091239</a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
