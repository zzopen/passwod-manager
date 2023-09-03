<script lang="ts" setup>
import SecretCategoryMenu from '@renderer/views/_components/secret-category/secret-category-menu'
import SecretCategoryMenuAction from '@renderer/views/_components/secret-category/category-menu-action'

defineOptions({ name: 'SecretCategoryList', inheritAttrs: false })
</script>

<template>
  <div class="secret-category-list">
    <secret-category-menu-action />
    <secret-category-menu />
  </div>
</template>

<style lang="scss" scoped>
.secret-category-list {
}
</style>
