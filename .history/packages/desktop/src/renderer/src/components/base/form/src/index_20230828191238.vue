<script lang="ts" setup>
import { useNamespace } from '../../shared/hooks'

defineOptions({ name: 'MForm', inheritAttrs: false })

const { b } = useNamespace('form')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass"></div>
</template>
