<script setup lang="ts">
import { useNamespace } from '@renderer/shared'
// import CustomTeleport from '@renderer/views/components/custom-teleport'

defineOptions({ name: 'XlLayoutDefault', inheritAttrs: false })

const { b } = useNamespace('layout-default')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout :class="getClass">
    <m-layout-left />
    <!-- <a-layout style="width: 100%; height: 100%">
      <m-layout-content />
    </a-layout> -->
  </a-layout>
  <!-- <custom-teleport /> -->
</template>
<style lang="scss" scoped>
.#{$b-ns}-layout-default {
  width: '100%';
  height: '100%';
}
</style>
