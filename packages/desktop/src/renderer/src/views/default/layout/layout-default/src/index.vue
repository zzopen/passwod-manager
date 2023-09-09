<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import LayoutHeader from '@renderer/views/default/layout/layout-header'
import LayoutLeft from '@renderer/views/default/layout/layout-left'
import RouterViewWrapper from '@renderer/views/_components/router-view-wrapper'
import CustomTeleport from '@renderer/views/_components/custom-teleport'

defineOptions({ name: 'LayoutDefault', inheritAttrs: false })

const { b } = useNamespace('layout-default')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout :class="getClass">
    <layout-header />
    <a-layout>
      <layout-left />
      <a-layout>
        <router-view-wrapper />
      </a-layout>
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
