<script lang="ts" setup>
import CategoryMenu from '@renderer/views/_components/secret-category/category-menu'
import CategoryMenuAction from '@renderer/views/_components/secret-category/category-menu-action'

defineOptions({ name: 'CategoryList', inheritAttrs: false })
</script>

<template>
  <div class="category-list">
    <category-menu-action />
    <category-menu />
  </div>
</template>

<style lang="scss" scoped>
.category-list {
}
</style>
