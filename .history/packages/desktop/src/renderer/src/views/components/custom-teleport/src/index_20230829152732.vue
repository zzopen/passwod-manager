<template>
  <Teleport to="body">
    <update-account-drawer />
    <add-category-modal />
  </Teleport>
</template>

<script lang="ts" setup>
// import UpdateAccountDrawer from '@renderer/business/views/components/update-account-drawer'
import CreateCategoryModal from '@renderer/business/views/components/add-category-modal'
import { onKeyDown, consoleLog } from '@renderer/share'

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
@renderer/shared
