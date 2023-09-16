<script lang="ts" setup>
import { useNamespace } from '@renderer/components/_shared'
import { drawerProps } from './props'
import { useVModel } from '@vueuse/core'

defineOptions({ name: 'XlBaseDrawer', inheritAttrs: false })

const props = defineProps(drawerProps())
const emits = defineEmits(['update:open', 'close'])
const openRef = useVModel(props, 'open', emits)
const { b } = useNamespace('base-drawer')
const getClass = computed(() => {
  return [b()]
})

const handleAfterOpenChange = () => {}

const handleClose = (event: Event) => {
  emits('close', event)
}
</script>

<template>
  <div :class="getClass">
    <a-drawer
      v-model:open="openRef"
      :title="title"
      :placement="placement"
      @after-open-change="handleAfterOpenChange"
      @close="handleClose"
    >
      <slot></slot>
    </a-drawer>
  </div>
</template>

<style lang="scss" scoped>
.#{$ns}-base-drawer {
}
</style>
