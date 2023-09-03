<script setup lang="ts">
import { createClassName } from '@renderer/styles'
// import CustomTeleport from '@renderer/views/components/custom-teleport'

defineOptions({ name: 'MLayoutDefault', inheritAttrs: false })
const useStyles = createStyles(() => ({
  a: {
    width: '100%',
    height: '100%'
  }
}))
// const { styles, cx, theme } = useStyles()
</script>

<template>
  <a-layout :class="styles.a">
    最外层
    <!-- <m-layout-left />
    <a-layout style="width: 100%; height: 100%">
      <m-layout-content />
    </a-layout> -->
  </a-layout>
  <!-- <custom-teleport /> -->
</template>
