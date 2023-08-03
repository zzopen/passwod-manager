<template>
  <m-layout-sider>
    <m-app-logo />
    <sider-content />
  </m-layout-sider>
</template>

<script setup lang="ts">
import LayoutSiderSider from './Sider.vue'
import SiderContent from '@/business/views/components/sider'
defineOptions({
  name: 'LayoutLeft'
})
</script>

<style scoped lang="scss"></style>
