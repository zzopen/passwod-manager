<script setup lang="ts">
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
import { drawerProps } from './props'

defineOptions({
  name: 'Drawer',
  inheritAttrs: false
})

const props = defineProps(drawerProps())

const { nsCls } = useCls(globalCls.nsDrawer)
const getClass = computed(() => {
  return [nsCls]
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
    <a-drawer v-model:open="open" @after-open-change="handleAfterOpenChange" @close="handleClose">
      <slot></slot>
    </a-drawer>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
