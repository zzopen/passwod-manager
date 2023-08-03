<template>
  <a-layout :class="getClass">
    <!---左边--->
    <m-layout-left />
    <a-layout>
      <!---右边--->
      <m-layout-right />
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { globalCls } from '@/styles/module'
import { useCls } from '@/composables'

defineOptions({
  name: 'LayoutDefault'
})

const { nsCls } = useCls(globalCls.layout)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<style scoped lang="scss">
.#{$namespace-layout} {
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;

  .m-layout-right {
    height: 100vh;
  }
  // :deep(.layout-bottom) {
  //   width: inherit;
  //   height: calc(100% - $header-height);
  //   margin-top: $header-height;
  // }

  // :deep(.layout-bottom-bottom) {
  //   width: calc(100% - $sider-width);
  //   position: relative;
  // }
}
</style>
