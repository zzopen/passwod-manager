<script setup lang="ts">
import { h, SearchOutlined } from '@/business/utils'

defineOptions({
  name: 'MenuAction',
  inheritAttrs: false
})
</script>

<template>
  <div class="menu-action">
    <div>分类</div>
    <div>
      <a-button type="primary" shape="circle" :icon="h(SearchOutlined)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
