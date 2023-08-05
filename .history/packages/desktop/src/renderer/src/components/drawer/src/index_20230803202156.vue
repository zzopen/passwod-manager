<script setup lang="ts">
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'

defineOptions({
  name: 'Drawer',
  inheritAttrs: false
})

const { nsCls } = useCls(globalCls.nsDrawer)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<template>
  <div >
   <a-drawer
      v-model:open="open"
      v-bind="drawerProps"
      @after-open-change="handleAfterOpenChange"
      @close="handleClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
    </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
