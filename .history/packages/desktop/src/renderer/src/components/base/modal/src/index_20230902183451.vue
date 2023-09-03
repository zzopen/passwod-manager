<script lang="ts" setup>
import { useNamespace } from '@renderer/components/_shared'
import { modalProps } from './props'
import { useVModel } from '@vueuse/core'

defineOptions({ name: 'XlBaseModal', inheritAttrs: false })

defineProps(modalProps())
const emits = defineEmits<{
  (e: 'ok', event: Event): void
  (e: 'cancel', event: Event): void
  (e: 'update:open', open: boolean): void
}>()

const { b } = useNamespace('modal')
const getClass = computed(() => {
  return [b()]
})

const openRef = useVModel(props, 'open', emits)

const handleOk = (event: Event) => {
  emit('ok', event)
}

const handleCancel = (event: Event) => {
  emit('cancel', event)
  emit('update:open', false)
}

const openModal = () => {
  openRef.value = true
}

const closeModal = () => {
  openRef.value = false
}

defineExpose({
  openModal,
  closeModal
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
    :destroy-on-close="true"
    :mask-closable="false"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <slot></slot>
  </a-modal>
</template>

<style lang="scss" scoped>
.#{$ns}-base-modal {
}
</style>
