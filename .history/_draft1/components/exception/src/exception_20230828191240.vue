<script lang="ts" setup>
import { useNamespace } from '../../shared/hooks'

defineOptions({ name: 'MException', inheritAttrs: false })

const { b } = useNamespace('exception')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass">Exception</div>
</template>
