<script setup lang="ts">
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
../../../components/shared/hooks
