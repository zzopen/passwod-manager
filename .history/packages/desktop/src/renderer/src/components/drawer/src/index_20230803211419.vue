<script setup lang="ts">
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
import { drawerProps } from './props'

defineOptions({
  name: 'Drawer',
  inheritAttrs: false
})

const emit = defineEmits<{
  (e: 'close', event: Event): void
}>()

const props = defineProps(drawerProps())

const { nsCls } = useCls(globalCls.nsDrawer)
const getClass = computed(() => {
  return [nsCls]
})

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

<style scoped lang="scss">
@import './index.scss';
</style>
