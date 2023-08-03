<script setup lang="ts">
import CategoryMenu from '@/business/views/components/category-menu'
import MenuAction from '@/business/views/components/menu-action'

defineOptions({
  name: 'CategoryList',
  inheritAttrs: false
})
</script>

<template>
  <div class="category-list">
    <menu-action />
    <category-menu />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
