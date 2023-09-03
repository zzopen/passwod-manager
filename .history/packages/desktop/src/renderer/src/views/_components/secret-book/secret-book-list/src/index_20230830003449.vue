<script lang="ts" setup>
import { useEventStore } from '@renderer/stores'
defineOptions({ name: 'SecretBookList', inheritAttrs: false })

const eventStore = useEventStore()
const onClick = () => {
  // const p = { id: 1 }
  // eventStore.openRightContentPage(p)
}
</script>

<template>
  <div class="center-list">
    <a-button type="primary" @click="onClick">点我</a-button>
  </div>
</template>

<style lang="scss" scoped>
.secret-book-list {
}
</style>
