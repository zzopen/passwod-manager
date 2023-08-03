<script setup lang="ts">
defineOptions({
  name: 'LayoutRight',
  inheritAttrs: false
})
</script>

<template>
  <div class="layout-right">
    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
