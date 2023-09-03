<script lang="ts" setup>
defineOptions({ name: 'SecretBookTitle', inheritAttrs: false })
</script>

<template>
  <div class="secret-book-title">
    <div>All Item</div>
    <div>
      <a-button type="primary" style="width: 50%; background-color: #f4f4fb">全部类型</a-button>
      <a-button type="primary" style="width: 50%">全部Tag</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.secret-book-title {
}
</style>
