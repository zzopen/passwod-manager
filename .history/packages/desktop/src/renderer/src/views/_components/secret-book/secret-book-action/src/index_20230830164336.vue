<script lang="ts" setup>
defineOptions({ name: 'SecretBookAction', inheritAttrs: false })

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
    <a-space direction="vertical"> </a-space>
  </div>
</template>

<style lang="scss" scoped></style>
