<script setup lang="ts">
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'

defineOptions({
  name: 'Modal',
  inheritAttrs: false
})

const { nsCls } = useCls(globalCls.nsModal)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<template>
  <a-modal v-model:open="open" :class="getClass" title="Basic Modal" @ok="handleOk">
    <slot></slot>
  </a-modal>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
