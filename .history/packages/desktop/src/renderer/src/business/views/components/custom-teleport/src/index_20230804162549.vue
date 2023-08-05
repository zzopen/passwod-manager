<template>
  <Teleport to="body">
    <update-account-drawer />
    <add-category-modal />
  </Teleport>
</template>

<script setup lang="ts">
import UpdateAccountDrawer from '@/business/views/components/update-account-drawer'
import AddCategoryModal from '@/business/views/components/add-category-modal'
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
