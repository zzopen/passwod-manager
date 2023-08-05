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

const afterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}

c
</script>

<template>
  <div class="add-category-drawer">
    <a-drawer
      v-model:open="open"
      v-bind="drawerProps"
      @after-open-change="afterOpenChange"
      @close="handleClose"
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
