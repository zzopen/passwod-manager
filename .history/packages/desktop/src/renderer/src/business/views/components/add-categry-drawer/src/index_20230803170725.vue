<script setup lang="ts">
defineOptions({
  name: 'AddCategryDrawer',
  inheritAttrs: false
})
</script>

<template>
  <div class="add-categry-drawer">
    <a-drawer
      v-model:open="open"
      class="custom-class"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      style="color: red"
      title="Basic Drawer"
      placement="right"
      @after-open-change="afterOpenChange"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
