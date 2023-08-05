<script setup lang="ts">
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'

defineOptions({
  name: 'FormBase',
  inheritAttrs: false
})

const { nsCls } = useCls(globalCls.nsFormBase)
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
