<template>
  <Teleport to="body">
    <add-category-drawer />
  </Teleport>
</template>

<script setup lang="ts">
import AddCategoryDrawer from '@/business/views/components/add-category-drawer'
import { onKeyDown, consoleLog } from '@/business/utils'

defineOptions({
  name: 'CustomTeleport',
  inheritAttrs: false
})

onKeyDown(
  ' ',
  (e) => {
    consoleLog('Space key press', e)
  },
  { dedupe: true }
)
</script>

<style scoped lang="scss">
.custom-teleport {
}
</style>
@/business/views/components/update-account-drawer
