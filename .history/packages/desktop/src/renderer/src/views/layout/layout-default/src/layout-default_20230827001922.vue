<script setup lang="ts">
import { createStyles } from '@renderer/styles'
// import CustomTeleport from '@renderer/views/components/custom-teleport'

defineOptions({ name: 'MLayoutDefault', inheritAttrs: false })
const useStyles = createStyles(({ token, css }) => ({
  a: {
    color: 'red'
  }
}))
</script>

<template>
  <a-layout style="width: 100%; height: 100%">
    最外层
    <!-- <m-layout-left />
    <a-layout style="width: 100%; height: 100%">
      <m-layout-content />
    </a-layout> -->
  </a-layout>
  <!-- <custom-teleport /> -->
</template>
