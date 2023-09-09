<script lang="ts" setup>
import { useSecretCategoryStore } from '@renderer/stores'
import { listenerLoadSecretBookList } from '@renderer/shared'

defineOptions({ name: 'SecretBookTitle', inheritAttrs: false })

const secretCategoryStore = useSecretCategoryStore()
const secretCategoryName = ref<string>('')

const ready = async (p: { secret_category_id?: string }) => {
  const secretCategory = secretCategoryStore.getSecretCategoryByKey(p.secret_category_id)
  if (!secretCategory) {
    secretCategoryName.value = ''
  } else {
    secretCategoryName.value = secretCategory.name ?? ''
  }
}

listenerLoadSecretBookList(ready)
</script>

<template>
  <div class="secret-book-title">
    <span>{{ secretCategoryName }}~记录列表</span>
  </div>
</template>

<style lang="scss" scoped>
.secret-book-title {
  font-size: 16px;
  text-align: center;
}
</style>
