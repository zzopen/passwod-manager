<script lang="ts" setup>
// import { onKeyDown } from '@renderer/shared/deps'
// import { consoleLog } from '@renderer/shared'
import UpdateSecretBookDrawer from '@renderer/views/_components/secret-book/update-secret-book-drawer'
import CreateSecretCategoryModal from '@renderer/views/_components/secret-category/create-secret-category-modal'
import CreateSecretBookDrawer from '@renderer/views/_components/secret-book/create-secret-book-drawer'

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
    <update-secret-book-drawer />
    <create-secret-book-drawer />
    <create-secret-category-modal />
  </Teleport>
</template>
