<script setup lang="ts">
import CenterTop from '@/business/views/components/layout/center-top'
import CenterList from '@/business/views/components/layout/center-list'
import CenterFooter from '@/business/views/components/layout/center-footer'
defineOptions({
  name: 'LayoutCenter',
  inheritAttrs: false
})
</script>

<template>
  <div class="layout-center">
    <center-top />
    <center-list />
    <center-footer />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
