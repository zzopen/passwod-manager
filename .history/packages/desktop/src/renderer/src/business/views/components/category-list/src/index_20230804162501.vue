<script setup lang="ts">
import CategoryMenu from '@/business/views/components/category-menu'
import MenuAction from '@/business/views/components/menu-action'
import { useEventStore } from '@/stores'

defineOptions({
  name: 'CategoryList',
  inheritAttrs: false
})

const eventStore = useEventStore()
const handleAction = () => {
  eventStore.openAddCategoryModal()
}
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
