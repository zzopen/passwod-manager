<script setup lang="ts">
defineOptions({name: 'XlCipherLeft',inheritAttrs: false})

const contentStyle = computed<CSSProperties>(() => {
  return {}
})

const siderProps = computed(() => {
  return {
    width: cipherPageLeftWidth
  }
})

const siderStyle = computed<CSSProperties>(() => {
  return {
    height: '100%',
    backgroundColor: cipherPageLeftBgColor
  }
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
