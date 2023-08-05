<script setup lang="ts">
import { useNamespace } from '../../../../shared/hooks'

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
