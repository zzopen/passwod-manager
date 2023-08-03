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
  color: '#fff',
  backgroundColor: '#3f4361'
}
</script>

<style scoped lang="scss"></style>
