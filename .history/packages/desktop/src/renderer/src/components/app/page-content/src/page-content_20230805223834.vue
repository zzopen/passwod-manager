<script setup lang="ts">
import { useNamespace } from '../../shared/hooks'

defineOptions({ name: 'MPageContent', inheritAttrs: false })

const { b } = useNamespace('page-content')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass"></div>
</template>
