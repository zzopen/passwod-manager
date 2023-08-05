<script setup lang="ts">
import { useNamespace } from '../../shared/hooks'

defineOptions({ name: 'MDrawer', inheritAttrs: false })

const { b } = useNamespace('drawer')
const getClass = computed(() => {
  return [b()]
})
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
