<script lang="ts" setup>
import { useNamespace } from '../../shared/hooks'

defineOptions({ name: 'MLogin', inheritAttrs: false })

const { b } = useNamespace('login')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass">login</div>
</template>
