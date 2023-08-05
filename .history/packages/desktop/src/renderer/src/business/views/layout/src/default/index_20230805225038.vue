<template>
  <a-layout style="width: 100%; height: 100%" :class="getClass">
    <m-layout-left />
    <a-layout style="width: 100%; height: 100%">
      <m-layout-content />
    </a-layout>
  </a-layout>
  <custom-teleport />
</template>

<script setup lang="ts">
import { useNamespace } from '@renderer/shared'
import { useCls } from '@renderer/composables'
import CustomTeleport from '@renderer/business/views/components/custom-teleport'

defineOptions({
  name: 'LayoutDefault'
})

const { nsCls } = useCls(globalCls.nsLayout)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<style scoped lang="scss">
.#{$ns-layout} {
}
</style>
@renderer/hooks
