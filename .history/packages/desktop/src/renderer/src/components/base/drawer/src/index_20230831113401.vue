<script lang="ts" setup>
import { useNamespace } from '@renderer/components/_shared'
import { drawerProps } from './props'
import { useVModel } from '@vueuse/core'

defineOptions({ name: 'XlBaseDrawer', inheritAttrs: false })
const props = defineProps(drawerProps())

const openRef = useVModel(props)
const { b } = useNamespace('drawer')
const getClass = computed(() => {
  return [b()]
})

const emits = defineEmits<{
  (e: 'update:open', v: boolean): void
  (e: 'close', event: Event): void
}>()



const handleAfterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}

const handleClose = (event: Event) => {
  emits('close', event)
  console.log('openRef.value:', openRef.value)
}
</script>

<template>
  <div :class="getClass">
    <a-drawer
      v-model:open="open"
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
.#{$ns}-drawer {
}
</style>
