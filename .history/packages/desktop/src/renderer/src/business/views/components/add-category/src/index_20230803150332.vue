<script setup lang="ts">
defineOptions({
  name: 'AddCategory',
  inheritAttrs: false
})
</script>

<template>
  <div class="add-category">
    <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
