<script setup lang="ts">
defineOptions({
  name: 'CategoryMenu',
  inheritAttrs: false
})
</script>

<template>
  <div class="category-menu">
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      :items="items"
      @click="handleClick"
    ></a-menu>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
