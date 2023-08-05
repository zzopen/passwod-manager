<template>
  <Teleport to="body">
    <update-account-drawer />
  </Teleport>
</template>

<script setup lang="ts">
import UpdateAccountyDrawer from '@/business/views/components/update-account-drawer'
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
