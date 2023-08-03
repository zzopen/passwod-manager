<script setup lang="ts">
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
import { modalProps } from './props'

defineOptions({
  name: 'Modal',
  inheritAttrs: false
})

const props = defineProps(modalProps())
const open = ref<boolean>(props.open)

const emit = defineEmits<{
  (e: 'ok', event: Event): void
}>()

watch(
  () => props.open,
  (value) => {
    open.value = value
  }
)

const onOk = (event: Event) => {
  emit('ok', event)
}

const { nsCls } = useCls(globalCls.nsModal)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<template>
  <a-modal v-model:open="open" :class="getClass" title="title" @ok="onOk">
    <slot></slot>
  </a-modal>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
