<script setup lang="ts">
import { useNamespace } from '../../../../shared/hooks'

defineOptions({ name: 'MAppLogo', inheritAttrs: false })

const { b } = useNamespace('app-logo')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass">
    <img src="@renderer/assets/music.png" alt="logo" />
    <div :class="getTitleClass">{{ logoTitle }}</div>
  </div>
</template>
