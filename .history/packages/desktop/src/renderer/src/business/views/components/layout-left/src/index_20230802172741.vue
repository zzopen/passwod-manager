<script setup lang="ts">
import CategoryList from '@/business/views/components/layout/category-list'

defineOptions({
  name: 'LayoutLeft',
  inheritAttrs: false
})
</script>

<template>
  <div class="layout-left">
    <m-app-logo />
    <category-menu />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
