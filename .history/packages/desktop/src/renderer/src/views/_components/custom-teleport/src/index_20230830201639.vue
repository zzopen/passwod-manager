<script lang="ts" setup>
import { onKeyDown, consoleLog } from '@renderer/shared'
import SecretBookUpdateDrawer from '@renderer/views/_components/secret-book/secret-book-update-drawer'
import AddCategoryModal from '@renderer/views/_components/category/add-category-modal'

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
