<script setup lang="ts">
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
import { modalProps } from './props'

defineOptions({
  name: 'Modal',
  inheritAttrs: false
})

const props = defineProps(modalProps())
watch(
  () => props.open,
  () => {
    console.log(value.value)
  }
)

const { nsCls } = useCls(globalCls.nsModal)
const getClass = computed(() => {
  return [nsCls]
})

const open = ref<boolean>(false)
const onOk = () => {}
</script>

<template>
  <a-modal v-model:open="open" :class="getClass" title="Basic Modal" @ok="onOk">
    <slot></slot>
  </a-modal>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
