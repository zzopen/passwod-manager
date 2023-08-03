<script setup lang="ts">
import CategoryMenu from '@/business/views/components/category-menu'
import MenuAction from '@/business/views/components/menu-action'
import AddCategory from '@/business/views/components/add-category'

defineOptions({
  name: 'CategoryList',
  inheritAttrs: false
})

const addCategoryModal = ref()

const handleAction = (event: Event) => {
  console.log(event)
  addCategoryModal.value.open()
}
</script>

<template>
  <div class="category-list">
    <menu-action @do-action="handleAction" />
    <category-menu />
    <add-category ref="addCategoryModal" />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
