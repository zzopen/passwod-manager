<script lang="ts" setup>
import { useSecretBookStore } from '@renderer/stores'
import { emitLoadSecretBookList } from '@renderer/shared'

defineOptions({ name: 'SecretBookSearch', inheritAttrs: false })

const secretBookStore = useSecretBookStore()

const secretBookName = ref<string>('')
watch(
  () => secretBookName.value,
  (newVal) => {
    secretBookStore.secretBookSearch.secret_book_name = newVal
  }
)

const onClick = async () => {
  emitLoadSecretBookList(secretBookStore.secretBookSearch)
}

const onRest = () => {
  secretBookName.value = ''
}
</script>

<template>
  <div class="secret-book-search">
    <a-row align="middle" :wrap="false">
      <a-col>
        <a-input
          v-model:value="secretBookName"
          placeholder="请输入关键字"
          style="width: 150px; height: 25px; margin: 5px 0px 5px 0px"
        />
      </a-col>
      <a-col flex="40px">
        <a-button size="small" type="primary" @click="onClick">查询</a-button>
      </a-col>
      <div style="width: 5px"></div>
      <a-col flex="40px">
        <a-button size="small" type="primary" @click="onRest">重置</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.secret-book-search {
}
</style>
