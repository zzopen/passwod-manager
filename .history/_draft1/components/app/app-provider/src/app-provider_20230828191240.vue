<script lang="ts" setup>
import { useNamespace } from '../../../shared'

defineOptions({ name: 'MAppProvider', inheritAttrs: false })

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
