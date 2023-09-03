<script lang="ts" setup>
defineOptions({ name: 'SecretBookList', inheritAttrs: false })

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
        <a-list-item>
          <template #actions>
            <a key="list-loadmore-edit">edit</a>
            <a key="list-loadmore-more">more</a>
          </template>
          <a-skeleton avatar :title="false" :loading="!!item.loading" active>
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <template #title>
                <a href="https://www.antdv.com/">{{ item.name.last }}</a>
              </template>
              <template #avatar>
                <a-avatar :src="item.picture.large" />
              </template>
            </a-list-item-meta>
            <div>content</div>
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<style lang="scss" scoped>
.secret-book-list {
}
</style>
