<script lang="ts" setup>
import { useSecretCategoryStore } from '@renderer/stores'
import { SelectOptions } from '@common/types'
import {
  CreateSecretBookForm,
  defaultDataSource,
  type DataSource
} from '@renderer/views/_components/secret-book/create-secret-book-form'

import { message } from '@renderer/shared/deps'
import { listenerOpenCreateSecretBookDrawer, emitRefreshHomePage } from '@renderer/shared'

defineOptions({ name: 'CreateSecretBookDrawer', inheritAttrs: false })

const secretCategorStore = useSecretCategoryStore()

const state = reactive<{
  dataSource: DataSource
  openDrawer: boolean
  title: string
  secretCategoryOptions: SelectOptions
}>({
  title: '创建密码记录',
  dataSource: { ...defaultDataSource },
  secretCategoryOptions: [],
  openDrawer: false
})

const onSuccess = () => {
  state.openDrawer = false
  message.success('创建成功')
  emitRefreshHomePage({ secret_category_id: state.dataSource.secretCategoryId })
}

const ready = async (p: { secret_category_id?: string }) => {
  state.dataSource = {
    title: '',
    website: '',
    username: '',
    password: '',
    email: '',
    mobile: '',
    remark: '',
    secretCategoryId: p.secret_category_id ?? undefined
  }

  state.secretCategoryOptions = secretCategorStore.getSecretCategorySelectOptions
  state.openDrawer = true
}

listenerOpenCreateSecretBookDrawer(ready)
</script>

<template>
  <div>
    <xl-base-drawer v-model:open="state.openDrawer" :title="state.title">
      <create-secret-book-form
        v-model:dataSource="state.dataSource"
        :secret-category-options="state.secretCategoryOptions"
        @success="onSuccess"
      />
    </xl-base-drawer>
  </div>
</template>

<style lang="scss" scoped></style>
