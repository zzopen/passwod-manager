<script setup lang="ts">
import CategoryMenu from '@/business/views/components/category-menu'
import MenuAction from '@/business/views/components/menu-action'

defineOptions({
  name: 'CategoryList',
  inheritAttrs: false
})

const handleAction = (event: Event) => {}
</script>

<template>
  <div class="category-list">
    <menu-action @do-action="handleAction" />
    <category-menu />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
@/business/views/components/add-category-modal
