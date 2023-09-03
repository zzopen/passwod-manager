<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import LayoutLeft from '@renderer/views/components/layout/layout-left'
import CustomTeleport from '@renderer/views/components/custom-teleport'

defineOptions({ name: 'XlLayoutDefault', inheritAttrs: false })

const { b } = useNamespace('layout-default')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout :class="getClass">
    <layout-left />
    <a-layout>
      <router-view></router-view>
    </a-layout>
  </a-layout>
  <custom-teleport />
</template>

<style lang="scss" scoped>
.#{$b-ns}-layout-default {
  width: 100%;
  height: 100%;
}
</style>
