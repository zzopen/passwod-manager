<script lang="ts" setup>
import CategoryMenu from '@renderer/views/category/category-menu'
import MenuAction from '@renderer/views/category/menu-action'
import { useEventStore } from '@renderer/stores'

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
.category-list {
}
</style>
