<script lang="ts" setup>
import { useSecretBookStore } from '@renderer/stores'
import type { DataSource, DataSourceItem } from './props'
import { listenerClickSecretCategoryMenuItem, emitClickSecretBookListItem } from '@renderer/shared'

defineOptions({ name: 'SecretBookList', inheritAttrs: false })
const secretBookStore = useSecretBookStore()
const state = reactive<{ dataSource: DataSource }>({
  dataSource: []
})

const dataSource = toRef(state.dataSource)
const ready = async (p: { secret_category_id: string }) => {
  //secretBookStore.resetSecretBookId()
  await secretBookStore.loadSecretBookList(p)
  if (!secretBookStore.apiSecretBookList) {
    return
  }

  const tempDataSource: DataSource = []
  for (const item of secretBookStore.apiSecretBookList) {
    const temp: DataSourceItem = {
      id: item.id,
      title: item.title
    }
    tempDataSource.push(temp)
  }

  dataSource.value = tempDataSource
}

listenerClickSecretCategoryMenuItem(ready)

const onClickListItem = (_, item) => {
  // console.log('index:', index)
  // console.log('item:', toRaw(item), item.id)
  emitClickSecretBookListItem({ secret_book_id: item.id })
}
</script>

<template>
  <div class="center-list">
    <!-- <a-button type="primary" @click="onClick">点我</a-button> -->
    <a-list size="small" bordered :data-source="dataSource">
      <template #renderItem="{ index, item }">
        <a-list-item @click="onClickListItem(index, item)">
          <a-list-item-meta>
            <template #title> {{ item.title }} </template>
            <template #avatar>
              <a-avatar src="https://randomuser.me/api/portraits/women/70.jpg" />
            </template>
          </a-list-item-meta>
          <div></div>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<style lang="scss" scoped>
.secret-book-list {
}
</style>
