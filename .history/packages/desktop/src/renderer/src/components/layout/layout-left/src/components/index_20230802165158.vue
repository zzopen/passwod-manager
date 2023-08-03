<template>
  <m-layout-sider>
    <b-layout-left />
  </m-layout-sider>
</template>

<script setup lang="ts">
import BLayoutLeft from '@/business/views/components/layout-left'
defineOptions({
  name: 'LayoutLeft'
})

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff'
  // backgroundColor: '#108ee9'
}
</script>

<style scoped lang="scss"></style>
