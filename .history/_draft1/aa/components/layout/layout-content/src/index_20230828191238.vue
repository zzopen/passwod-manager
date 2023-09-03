<script lang="ts" setup>
import RightContent from '@renderer/business/views/components/right-content'
defineOptions({
  name: 'LayoutContent',
  inheritAttrs: false
})
</script>

<template>
  <div class="layout-content">
    <right-content />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
