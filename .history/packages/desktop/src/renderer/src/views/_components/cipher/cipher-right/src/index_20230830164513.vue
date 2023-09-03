<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'CipherRight', inheritAttrs: false })

const { b } = useNamespace('cipher-right')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <a-layout-content :class="getClass">
    <a-empty
      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
      :image-style="{
        height: '60px'
      }"
    >
      <template #description>
        <span>
          Customize
          <a href="#api">Description</a>
        </span>
      </template>
      <a-button type="primary">Create Now</a-button>
    </a-empty>
    <!-- <b-layout-content /> -->
  </a-layout-content>
</template>

<style lang="scss" scoped>
.#{$b-ns}-cipher-right {
}
</style>
