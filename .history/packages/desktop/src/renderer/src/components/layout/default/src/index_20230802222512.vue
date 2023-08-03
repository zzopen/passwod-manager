<template>
  <a-layout :class="getClass">
    <m-layout-left />
    <a-layout style="width:'100%', height:'100%'">
      <m-layout-content />
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { globalCls } from '@/styles/module'
import { useCls } from '@/composables'
import { CSSProperties } from 'vue'

defineOptions({
  name: 'LayoutDefault'
})

const { nsCls } = useCls(globalCls.nsLayout)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<style scoped lang="scss">
.#{$ns-layout} {
  width: 100%;
  height: 100%;
}
</style>
