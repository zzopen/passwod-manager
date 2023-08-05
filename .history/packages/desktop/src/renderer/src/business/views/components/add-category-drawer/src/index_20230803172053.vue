<script setup lang="ts">
import { useEventStore } from '@/stores'

defineOptions({
  name: 'AddCategoryDrawer',
  inheritAttrs: false
})

const eventStore = useEventStore()

const open = computed(() => {
  return eventStore.getAddCategoryDrawerOpen
})

const afterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}
</script>

<template>
  <div class="add-category-drawer">
    <a-drawer
      v-model:open="open"
      class="custom-class"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      style="color: red"
      title="Basic Drawer"
      placement="right"
      @after-open-change="afterOpenChange"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
