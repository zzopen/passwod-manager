<script lang="ts" setup>
defineOptions({ name: 'SecretBookList', inheritAttrs: false })

const data: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

const onClickListItem = (index, item) => {
  console.log('index:', index)
  console.log('item:', item)
}
</script>

<template>
  <div class="center-list">
    <!-- <a-button type="primary" @click="onClick">点我</a-button> -->
    <a-list size="small" bordered :data-source="data">
      <template #renderItem="{ index, item }">
        <a-list-item @click="onClickListItem(index, item)">
          <a-list-item-meta>
            <template #title> 阿里云-智牛 </template>
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
