<script lang="ts" setup>
import { onKeyDown, consoleLog } from '@renderer/shared'
// import UpdateAccountDrawer from '@renderer/business/views/components/update-account-drawer'
import AddCategoryModal from '@renderer/views/components/add-category-modal'

defineOptions({ name: 'CustomTeleport', inheritAttrs: false })

onKeyDown(
  ' ',
  (e) => {
    consoleLog('Space key press', e)
  },
  { dedupe: true }
)
</script>

<template>
  <Teleport to="body">
    <!-- <update-account-drawer /> -->
    <add-category-modal />
  </Teleport>
</template>

<style scoped lang="scss">
.custom-teleport {
}
</style>
