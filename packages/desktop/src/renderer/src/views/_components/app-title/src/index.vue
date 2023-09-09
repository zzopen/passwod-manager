<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import { useMixStore } from '@renderer/stores'
defineOptions({ name: 'AppLogo', inheritAttrs: false })

const mixStore = useMixStore()
const { b } = useNamespace('app-title')
const getClass = computed(() => {
  return [b()]
})

const title = computed(() => {
  return mixStore.title
})
</script>

<template>
  <div :class="getClass">{{ title }}</div>
</template>

<style lang="scss" scope>
.#{$b-ns}-app-title {
  text-align: center;
  font-size: 16px;
  @include app-drag;
  @include app-no-user-select;
}
</style>
