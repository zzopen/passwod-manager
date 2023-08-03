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
  <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
  <div :class="getClass"></div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
