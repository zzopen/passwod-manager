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
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px'
  // color: '#fff'
  // backgroundColor: '#108ee9'
}
</script>

<style scoped lang="scss"></style>
