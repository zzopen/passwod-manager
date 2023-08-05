<script setup lang="ts">
import { useEventStore } from '@/stores'

defineOptions({
  name: 'AddCategoryDrawer',
  inheritAttrs: false
})

const eventStore = useEventStore()
const drawerProps = reactive({
  title: 'asdasd',
  placement: 'right'
})

const open = computed(() => {
  return eventStore.getAddCategoryDrawerOpen
})
</script>

<template>
  <div class="add-category-drawer">
    <m-drawer ref="drawerRef" :open="open" :title="drawerProps.title" placement="right">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </m-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
