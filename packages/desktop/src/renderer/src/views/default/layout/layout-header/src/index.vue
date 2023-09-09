<script lang="ts" setup>
import { useNamespace, useCssVar } from '@renderer/shared'
import CipherHeader from '@renderer/views/_components/cipher/cipher-header'
defineOptions({ name: 'LayoutHeader', inheritAttrs: false })

const { b } = useNamespace('layout-header')
const { appLayoutHeaderHeight, appLayoutHeaderBgColor } = useCssVar()
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-header :class="getClass">
    <cipher-header />
  </a-layout-header>
</template>

<style lang="scss" scoped>
.#{$b-ns}-layout-header {
  height: v-bind('appLayoutHeaderHeight');
  line-height: v-bind('appLayoutHeaderHeight');
  padding: 0;
  padding-left: 75px;
  background-color: v-bind('appLayoutHeaderBgColor');
}
</style>
