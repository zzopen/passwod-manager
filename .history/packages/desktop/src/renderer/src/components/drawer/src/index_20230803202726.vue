<script setup lang="ts">
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
import type { DrawerProps } from 'ant-design-vue'

defineOptions({
  name: 'Drawer',
  inheritAttrs: false
})

const { nsCls } = useCls(globalCls.nsDrawer)
const getClass = computed(() => {
  return [nsCls]
})
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
  <div :class="getClass">
    <a-drawer
      v-model:open="open"
      v-bind="drawerProps"
      @after-open-change="handleAfterOpenChange"
      @close="handleClose"
    >
      <slot></slot>
    </a-drawer>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
