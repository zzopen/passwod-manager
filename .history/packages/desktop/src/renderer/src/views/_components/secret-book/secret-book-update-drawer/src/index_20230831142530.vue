<script lang="ts" setup>
import {
  SecretBookUpdateForm,
  type DataSource,
  defaultDataSource
} from '@renderer/views/_components/secret-book/secret-book-update-form'
import { useRequestStore, useSecretBookStore } from '@renderer/stores'
import { message } from '@renderer/shared'

defineOptions({ name: 'SecretBookUpdateDrawer', inheritAttrs: false })

const requestStore = useRequestStore()
const secretBookStore = useSecretBookStore()

const openDrawerRef = ref(false)

const dataSource = shallowReactive<DataSource>({ ...defaultDataSource })

watch(
  () => secretBookStore.updateSecretBookId,
  (newVal) => {
    console.log('newVal:', newVal)
    if (!newVal || newVal == '') {
      openDrawerRef.value = false
    } else {
      const res = requestStore.getSecretBookDetail({ id: newVal })
      if (!res) {
        return
      }

      openDrawerRef.value = true
    }
  }
)

const onSubmit = () => {
  console.log('校验成功', dataSource)
}
</script>

<template>
  <div class="update-account-drawer">
    <xl-base-drawer v-model:open="openDrawerRef" title="标题">
      <secret-book-update-form
        ref="updateAccountFormRef"
        :data-source="dataSource"
        @success="onSubmit"
      />
    </xl-base-drawer>
  </div>
</template>

<style lang="scss" scoped></style>
