<template>
  <Teleport to="body">
    <context-holder />
  </Teleport>
</template>

<script setup lang="ts">
import { onKeyDown, consoleLog } from '@/business/utils'
import { usePlayerStore } from '@/stores'
import { useMessage } from '@/composables'

defineOptions({
  name: 'CustomTeleport',
  inheritAttrs: false
})

const { contextHolder } = useMessage()

const playerStore = usePlayerStore()
onKeyDown(
  ' ',
  (e) => {
    consoleLog('Space key press', e)
    playerStore.togglePlay()
  },
  { dedupe: true }
)
</script>

<style scoped lang="scss">
.custom-teleport {
}
</style>
