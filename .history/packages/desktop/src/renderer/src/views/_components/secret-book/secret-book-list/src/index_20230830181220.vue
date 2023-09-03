<script lang="ts" setup>
import { useSecretBookStore } from '@renderer/stores'
import { emitOpenSecretBookDetailPage } from '@renderer/shared'

defineOptions({ name: 'SecretBookList', inheritAttrs: false })

const secretBookStore = useSecretBookStore()
onMounted(async () => {
  await secretBookStore.loadSecretBookList({})
})

const data = computed(() => {
  return secretBookStore.secretBookList
})

const onClickListItem = (index, item) => {
  console.log('index:', index)
  console.log('item:', toRaw(item))
  secretBookStore.setSecretBookId(item.id)
}
</script>

<template>
  <div class="center-list">
    <!-- <a-button type="primary" @click="onClick">点我</a-button> -->
    <a-list size="small" bordered :data-source="data">
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
