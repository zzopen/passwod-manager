<script lang="ts" setup>
defineOptions({ name: 'SecretBookTitle', inheritAttrs: false })
</script>

<template>
  <div class="secret-book-title">
    <div>All Item</div>
    <a-button type="primary" :size="size">Primary</a-button>
    <a-button type="primary" :size="size">Primary</a-button>
  </div>
</template>

<style lang="scss" scoped>
.secret-book-title {
}
</style>
