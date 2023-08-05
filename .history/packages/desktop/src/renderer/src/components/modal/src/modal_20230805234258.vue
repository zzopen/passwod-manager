<script setup lang="ts">
import { useNamespace } from '../../shared/hooks'

defineOptions({ name: 'MModal', inheritAttrs: false })

const { b } = useNamespace('modal')
const getClass = computed(() => {
  return [b()]
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
