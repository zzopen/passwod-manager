<template>
  <a-layout-content :style="contentStyle">
    <m-page-content />
  </a-layout-content>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue'

defineOptions({
  name: 'LayoutRight'
})

const contentStyle: CSSProperties = {
  width: '100%',
  height: '100%'
}
</script>

<style scoped lang="scss"></style>
