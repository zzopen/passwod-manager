<script setup lang="ts">
import CategoryMenu from '@/business/views/components/category-menu'
import MenuAction from '@/business/views/components/menu-action'
import AddCategory from '@/business/views/components/add-category'

defineOptions({
  name: 'CategoryList',
  inheritAttrs: false
})

const onClickMenuAction = (event: Event) => {
  console.log(event)
}
</script>

<template>
  <div class="category-list">
    <menu-action @click-plus="onClickMenuAction" />
    <category-menu />
    <add-category />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
