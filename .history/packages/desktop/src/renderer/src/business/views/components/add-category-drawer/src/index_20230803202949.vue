<script setup lang="ts">
import { useEventStore } from '@/stores'
import type { DrawerProps } from '@/business/utils'

defineOptions({
  name: 'AddCategoryDrawer',
  inheritAttrs: false
})

const eventStore = useEventStore()
const drawerProps = reactive<DrawerProps>({
  title: 'asdasd',
  placement: 'right'
})

const open = computed(() => {
  return eventStore.getAddCategoryDrawerOpen
})

const handleAfterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}

const handleClose = () => {
  eventStore.openAddCategoryDrawer()
}
</script>

<template>
  <div class="add-category-drawer">
    <m-drawer>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </m-drawer>
    <a-drawer ref="drawerRef" :open="open"> </a-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
