<script lang="ts" setup>
defineOptions({ name: 'MLogin', inheritAttrs: false })

const { b } = useNamespace('login')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass">login</div>
</template>
