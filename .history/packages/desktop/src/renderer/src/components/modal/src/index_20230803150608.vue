<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'

defineOptions({
  name: 'Modal',
  inheritAttrs: false
})

const { nsCls } = useCls(globalCls.modal)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<template>
  <div :class="getClass"></div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
