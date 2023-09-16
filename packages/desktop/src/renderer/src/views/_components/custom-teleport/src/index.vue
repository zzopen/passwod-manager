<script lang="ts" setup>
// import { onKeyDown } from '@renderer/shared/deps'
// import { consoleLog } from '@renderer/shared'
import UpdateSecretBookDrawer from '@renderer/views/_components/secret-book/update-secret-book-drawer'
import CreateSecretCategoryModal from '@renderer/views/_components/secret-category/create-secret-category-modal'
import CreateSecretBookDrawer from '@renderer/views/_components/secret-book/create-secret-book-drawer'
import AppExportModal from '@renderer/views/_components/app-export-modal'
import SecretCategoryContextmenu from '@renderer/views/_components/secret-category/secret-category-contextmenu'
import UpdateSecretCategoryModal from '@renderer/views/_components/secret-category/update-secret-category-modal'

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
    <create-secret-book-drawer />
    <update-secret-book-drawer />
    <create-secret-category-modal />
    <update-secret-category-modal />
    <secret-category-contextmenu />
    <app-export-modal />
  </Teleport>
</template>
