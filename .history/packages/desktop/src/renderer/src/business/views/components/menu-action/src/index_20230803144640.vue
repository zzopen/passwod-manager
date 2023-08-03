<script setup lang="ts">
import { h, PlusOutlined } from '@/business/utils'

defineOptions({
  name: 'MenuAction',
  inheritAttrs: false
})
</script>

<template>
  <div class="menu-action">
    <div>分类</div>
    <div style="width: 20px; height: 20px">
      <a-button type="primary" size="small" shape="default" :icon="h(PlusOutlined)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
