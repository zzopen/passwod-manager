<template>
  <a-layout :class="getClass">
    <m-layout-left />
    <a-layout>
      <m-layout-content />
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { globalCls } from '@/styles/module'
import { useCls } from '@/composables'

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
  width: 100vh;
  height: 100vh;
}
</style>
