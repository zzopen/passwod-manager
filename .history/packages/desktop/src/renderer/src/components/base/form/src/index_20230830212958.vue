<script lang="ts" setup>
import { useNamespace } from '@renderer/components/_shared'
import { drawerProps } from './props'

defineOptions({ name: 'MForm', inheritAttrs: false })

const { b } = useNamespace('form')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass"></div>
</template>
