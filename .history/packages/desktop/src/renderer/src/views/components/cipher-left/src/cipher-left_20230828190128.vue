<script setup lang="ts">
defineOptions({
  name: 'XlCipherLeft',
  inheritAttrs: false
})
</script>

<template>
  <a-layout-sider :style="siderStyle" v-bind="siderProps">
    <b-layout-center />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
