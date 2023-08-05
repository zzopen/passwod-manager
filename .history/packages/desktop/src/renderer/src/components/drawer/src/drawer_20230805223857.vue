<script setup lang="ts">
import { useNamespace } from '../../shared/hooks'

defineOptions({ name: 'MDrawer', inheritAttrs: false })

const { b } = useNamespace('drawer')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass"></div>
</template>
