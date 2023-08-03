<script setup lang="ts">
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
import { modalProps } from './props'

defineOptions({
  name: 'Modal',
  inheritAttrs: false
})

const props = defineProps(modalProps())
const openRef = ref<boolean>(props.open)

const emit = defineEmits<{
  (e: 'ok', event: Event): void
  (e: 'cancel', event: Event): void
}>()

watch(
  () => props.open,
  (value) => {
    openRef.value = value
  }
)

const handleOk = (event: Event) => {
  emit('ok', event)
}

const handleCancel = (event: Event) => {
  emit('cancel', event)
}

const { nsCls } = useCls(globalCls.nsModal)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<template>
  <a-modal
    v-model:open="openRef"
    :class="getClass"
    :width="width"
    :title="title"
    :ok-text="okText"
    :cancel-text="cancelText"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <slot></slot>
  </a-modal>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
