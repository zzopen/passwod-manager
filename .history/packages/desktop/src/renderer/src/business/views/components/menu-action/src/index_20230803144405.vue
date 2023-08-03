<script setup lang="ts">
import { h, PlusSquareOutlined } from '@/business/utils'

defineOptions({
  name: 'MenuAction',
  inheritAttrs: false
})
</script>

<template>
  <div class="menu-action">
    <div>分类</div>
    <div>
      <a-button type="primary" ghost size="small" shape="default" :icon="h(PlusSquareOutlined)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
