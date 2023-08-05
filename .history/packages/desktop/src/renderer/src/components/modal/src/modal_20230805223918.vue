<script setup lang="ts">
import { useNamespace } from '../../shared/hooks'

defineOptions({ name: 'MModal', inheritAttrs: false })

const { b } = useNamespace('modal')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass"></div>
</template>
