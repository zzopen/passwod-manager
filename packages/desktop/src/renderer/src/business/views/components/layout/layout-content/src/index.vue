<script setup lang="ts">
import RightContent from '@/business/views/components/right-content'
defineOptions({
  name: 'LayoutContent',
  inheritAttrs: false
})
</script>

<template>
  <div class="layout-content">
    <right-content />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
