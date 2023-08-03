<template>
  <a-layout-content :style="contentStyle">
    <m-page-content />
  </a-layout-content>
</template>

<script setup lang="ts">
import BLayoutRight from '@/business/views/components/layout-right'
defineOptions({
  name: 'LayoutRight'
})

const contentStyle: CSSProperties = {
  // color: '#fff'
  // backgroundColor: '#108ee9'
}
</script>

<style scoped lang="scss"></style>
