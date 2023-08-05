<script setup lang="ts">
defineOptions({
  name: 'CenterList',
  inheritAttrs: false
})
</script>

<template>
  <div class="center-list">
    <a-button type="primary" @click="click">点我</a-button>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
