<script lang="ts" setup>
// import { onKeyDown } from '@renderer/shared/deps'
// import { consoleLog } from '@renderer/shared'
import SecretBookUpdateDrawer from '@renderer/views/_components/secret-book/update-secret-book-drawer'
import CreateSecretCategoryModal from '@renderer/views/_components/secret-category/create-secret-category-modal'

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
    <create-secret-category-modal />
  </Teleport>
</template>
