<script lang="ts" setup>
// import { onKeyDown, consoleLog } from '@renderer/shared'
import SecretBookUpdateDrawer from '@renderer/views/_components/secret-book/update-secret-book-drawer'
import AddCategoryModal from '@renderer/views/_components/secret-category/create-secret-category-modal'

defineOptions({ name: 'CustomTeleport', inheritAttrs: false })

// onKeyDown(
//   ' ',
//   (e) => {
//     consoleLog('Space key press', e)
//   },
//   { dedupe: true }
// )
</script>

<template>
  <Teleport to="body">
    <secret-book-update-drawer />
    <add-category-modal />
  </Teleport>
</template>
