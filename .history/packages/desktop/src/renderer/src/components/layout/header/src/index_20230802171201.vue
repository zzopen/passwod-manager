<template>
  <a-layout-header :class="getClass"> </a-layout-header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { globalCls } from '@/styles/module'
import { useCls } from '@/composables'

defineOptions({
  name: 'LayoutHeader'
})

const { nsCls } = useCls(globalCls.layoutHeader)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<style scoped lang="scss">
.#{$namespace-layout-header} {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  line-height: $header-height;
}
</style>
