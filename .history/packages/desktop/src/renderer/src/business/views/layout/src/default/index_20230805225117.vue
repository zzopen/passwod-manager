<script setup lang="ts">
import { useNamespace } from '@renderer/shared'
import CustomTeleport from '@renderer/business/views/components/custom-teleport'

defineOptions({
  name: 'LayoutDefault'
})

const { b } = useNamespace('ss')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout style="width: 100%; height: 100%" :class="getClass">
    <m-layout-left />
    <a-layout style="width: 100%; height: 100%">
      <m-layout-content />
    </a-layout>
  </a-layout>
  <custom-teleport />
</template>
