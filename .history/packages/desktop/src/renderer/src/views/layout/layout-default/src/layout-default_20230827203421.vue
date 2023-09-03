<script setup lang="ts">
// import { createClassName } from '@renderer/styles'
// import CustomTeleport from '@renderer/views/components/custom-teleport'

defineOptions({ name: 'MLayoutDefault', inheritAttrs: false })

// const getClass = computed({
//   // prefixCls: createClassName('layout-default')
//   width: '100%',
//   height: '100%'
// })

const getClass = computed(() => {
  return []
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
