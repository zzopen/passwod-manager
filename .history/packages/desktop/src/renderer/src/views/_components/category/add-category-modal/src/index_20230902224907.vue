<script lang="ts" setup>
import {
  message,
  listenerOpenCreateSecretCategoryModal,
  emitLoadSecretCategoryMenuList
} from '@renderer/shared'
import { AddSecretCategoryForm } from '@renderer/views/_components/category/add-category-form'

defineOptions({ name: 'AddCategoryModal', inheritAttrs: false })

const formRef = ref()
const state = reactive<{ modalOpen: boolean; modalTitle: string }>({
  modalTitle: '添加分类',
  modalOpen: false
})

const dataSource = reactive({ pid: '1', name: '22' })
const onCancel = () => {
  state.modalOpen = false
}

const onOk = async () => {
  if (!formRef) {
    return
  }

  const res = await formRef.value.onSubmit()
  if (!res) {
    return
  }

  message.info('创建成功')
  emitLoadSecretCategoryMenuList()
  onCancel()
}

const ready = () => {
  state.modalOpen = true
}

listenerOpenCreateSecretCategoryModal(ready)
</script>

<template>
  <div class="add-category-modal">
    <xl-base-modal
      v-model:open="state.modalOpen"
      :title="state.modalTitle"
      @cancel="onCancel"
      @ok="onOk"
    >
      <add-secret-category-form ref="formRef" />
    </xl-base-modal>
  </div>
</template>

<style lang="scss" scoped>
.add-category-modal {
}
</style>
