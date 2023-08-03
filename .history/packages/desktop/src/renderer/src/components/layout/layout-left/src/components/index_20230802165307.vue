<template>
  <m-layout-sider :style="layoutSiderStyle">
    <b-layout-left />
  </m-layout-sider>
</template>

<script setup lang="ts">
import BLayoutLeft from '@/business/views/components/layout-left'
defineOptions({
  name: 'LayoutLeft'
})

const layoutSiderStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff'
  backgroundColor: black
}
</script>

<style scoped lang="scss"></style>
