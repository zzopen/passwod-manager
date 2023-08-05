<script setup lang="ts">
import { useNamespace } from '../../shared'
import { drawerProps } from './drawer-props'

defineOptions({ name: 'MDrawer', inheritAttrs: false })

const { b } = useNamespace('drawer')
const getClass = computed(() => {
  return [b()]
})

const emit = defineEmits<{
  (e: 'close', event: Event): void
}>()

const props = defineProps({})

const openRef = ref<boolean>(props.open)
watch(
  () => props.open,
  (value) => {
    openRef.value = value
  }
)
const handleAfterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}

const handleClose = (event: Event) => {
  emit('close', event)
  console.log('openRef.value:', openRef.value)
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
