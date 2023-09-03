<script lang="ts" setup>
defineOptions({ name: 'SecretBookList', inheritAttrs: false })
const count = 3
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`

const initLoading = ref(true)
const loading = ref(false)
const data = ref([])
const list = ref([])
onMounted(() => {
  fetch(fakeDataUrl)
    .then((res) => res.json())
    .then((res) => {
      initLoading.value = false
      data.value = res.results
      list.value = res.results
    })
})

const onLoadMore = () => {
  loading.value = true
  list.value = data.value.concat(
    [...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))
  )
  fetch(fakeDataUrl)
    .then((res) => res.json())
    .then((res) => {
      const newData = data.value.concat(res.results)
      loading.value = false
      data.value = newData
      list.value = newData
      nextTick(() => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'))
      })
    })
}
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
