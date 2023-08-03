<script setup lang="ts">
defineOptions({
  name: 'CenterTop',
  inheritAttrs: false
})
</script>

<template>
  <div class="center-top">
    <a-space direction="vertical">
      <a-input v-model:value="value" placeholder="Basic usage" />
      <a-input v-model:value.lazy="value1" autofocus placeholder="Lazy usage" />
    </a-space>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
