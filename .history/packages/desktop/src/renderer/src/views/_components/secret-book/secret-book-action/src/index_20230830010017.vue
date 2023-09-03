<script lang="ts" setup>
defineOptions({ name: 'SecretBookAction', inheritAttrs: false })
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
  <div class="center-footer">
    <a-space direction="vertical">
      <a-input v-model:value="value" placeholder="Basic usage" />
      <a-input v-model:value.lazy="value1" autofocus placeholder="Lazy usage" />
    </a-space>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
