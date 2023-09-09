<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import AppControl from '@renderer/views/_components/app-control'
import AppTitle from '@renderer/views/_components/app-title'
import AppAbout from '@renderer/views/_components/app-about'
defineOptions({ name: 'CipherHeader', inheritAttrs: false })

const { b } = useNamespace('cipher-header')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass">
    <a-row>
      <a-col flex="none">
        <app-control />
      </a-col>
      <a-col flex="auto">
        <app-title />
      </a-col>
      <a-col flex="none">
        <app-about />
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-header {
}
</style>
