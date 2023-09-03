<script lang="ts" setup>
defineOptions({ name: 'SecretBookSearch', inheritAttrs: false })

import { watch, ref } from 'vue'
const value = ref<string>('')
const value1 = ref<string>('')
watch(value, () => {
  console.log(value.value)
})
watch(value1, () => {
  console.log(value1.value)
})
</script>

<template>
  <div class="secret-book-search">
    <a-space direction="vertical" style="width: 100%">
      <a-input v-model:value="value" placeholder="Search" style="height: 15px" />
    </a-space>
    <div>All Items</div>
  </div>
</template>

<style lang="scss" scoped>
.secret-book-search {
}
</style>
