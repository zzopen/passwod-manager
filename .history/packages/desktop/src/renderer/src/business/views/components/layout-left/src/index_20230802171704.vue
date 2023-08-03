<script setup lang="ts">
import CategoryMenu from '@/business/views/components/layout/category-menu'

defineOptions({
  name: 'LayoutLeft',
  inheritAttrs: false
})
</script>

<template>
  <div class="layout-left">
    <m-app-logo />
    <div>All Items</div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
