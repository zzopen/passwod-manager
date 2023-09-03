<script lang="ts" setup>
import { useEventStore } from '@renderer/stores'
defineOptions({ name: 'SecretBookList', inheritAttrs: false })

const eventStore = useEventStore()
const onClick = () => {
  // const p = { id: 1 }
  // eventStore.openRightContentPage(p)
}

const data: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]
</script>

<template>
  <div class="center-list">
    <!-- <a-button type="primary" @click="onClick">点我</a-button> -->
    <a-list size="small" bordered :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>{{ item }}</a-list-item>
      </template>
      <template #header>
        <div>Header</div>
      </template>
      <template #footer>
        <div>Footer</div>
      </template>
    </a-list>
  </div>
</template>

<style lang="scss" scoped>
.secret-book-list {
}
</style>
