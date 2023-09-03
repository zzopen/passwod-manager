<script setup lang="ts">
import { useNamespace } from '@renderer/shared'
import XlLayoutLeft from '@renderer/views/layout/layout-left'
// import CustomTeleport from '@renderer/views/components/custom-teleport'

defineOptions({ name: 'XlLayoutDefault', inheritAttrs: false })

const { b } = useNamespace('layout-default')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass">
    <a-layout>
      <!-- <xl-layout-left /> -->
      <!-- <a-layout style="width: 100%; height: 100%">
      <m-layout-content />
    </a-layout> -->
    </a-layout>
    <!-- <custom-teleport /> -->
  </div>
</template>

<style lang="scss" scoped>
.#{$b-ns}-layout-default {
  width: 100%;
  height: 100%;
}
</style>
