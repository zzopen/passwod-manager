<script lang="ts" setup>
defineOptions({ name: 'AppProvider', inheritAttrs: false })
</script>

<template>
  <div :class="getClass">
    <slot></slot>
  </div>
</template>
