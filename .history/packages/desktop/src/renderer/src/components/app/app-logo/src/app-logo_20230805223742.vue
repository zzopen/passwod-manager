<script setup lang="ts">
import { useNamespace } from '../../shared/hooks'

defineOptions({ name: 'MAppLogo', inheritAttrs: false })

const { b } = useNamespace('app-logo')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass"></div>
</template>
