<template>
  <a-layout-content :class="getClass">
    <m-page-content />
  </a-layout-content>
</template>
<script setup lang="ts">
import { globalCls } from '@/styles/module'
import { useCls } from '@/composables'

defineOptions({
  name: 'LayoutContent'
})

const { nsCls } = useCls(globalCls.nsLayoutContent)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<style scoped lang="scss">
.#{$ns-layout-content} {
   width: '100%',
  height: '100%'
</style>
