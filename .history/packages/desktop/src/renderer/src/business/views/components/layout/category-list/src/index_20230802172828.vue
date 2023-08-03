<script setup lang="ts">
import CategoryMenu from '@/business/views/components/layout/category-menu'
import MenuAction from '@/business/views/components/layout/menu-action'

defineOptions({
  name: 'CategoryList',
  inheritAttrs: false
})
</script>

<template>
  <div class="category-list">
    <category-menu />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
