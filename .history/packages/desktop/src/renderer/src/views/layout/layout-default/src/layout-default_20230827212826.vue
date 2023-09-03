<script setup lang="ts">
import { useNamespace } from '@renderer/shared'
import './layout-default.scss'
// import CustomTeleport from '@renderer/views/components/custom-teleport'

defineOptions({ name: 'MLayoutDefault', inheritAttrs: false })

const theme = {
  color: '100%'
}
const { b } = useNamespace('layout-default')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout :class="getClass">
    最外层
    <!-- <m-layout-left />
    <a-layout style="width: 100%; height: 100%">
      <m-layout-content />
    </a-layout> -->
  </a-layout>
  <!-- <custom-teleport /> -->
</template>
<style scoped lang="scss">
.#{$b-ns}-layout-default {
  width: v-bind('theme.color');
  height: 100%;
}
</style>
