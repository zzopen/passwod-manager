<script lang="ts" setup>
defineOptions({ name: 'AppProvider', inheritAttrs: false })

const { b } = useNamespace('app-provider')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass">
    <slot></slot>
  </div>
</template>
