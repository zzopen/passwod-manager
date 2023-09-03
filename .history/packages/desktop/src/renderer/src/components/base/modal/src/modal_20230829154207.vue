<script lang="ts" setup>
import { useNamespace } from '@rendered/components/_shared'
import { modalProps } from './props'

defineOptions({ name: 'MModal', inheritAttrs: false })

const { b } = useNamespace('modal')
const getClass = computed(() => {
  return [b()]
})

const props = defineProps(modalProps)
const openRef = ref<boolean>(props.open)

const emit = defineEmits<{
  (e: 'ok', event: Event): void
  (e: 'cancel', event: Event): void
  (e: 'update:open', open: boolean): void
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
  emit('update:open', false)
}
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
.#{$ns}-modal {
}
</style>
