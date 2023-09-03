<script lang="ts" setup>
import {
  message,
  listenerOpenCreateSecretCategoryModal,
  emitLoadSecretCategoryMenuList
} from '@renderer/shared'
import { AddSecretCategoryForm } from '@renderer/views/_components/category/add-category-form'
import { useRequestStore, useSecretCategoryStore } from '@renderer/stores'

defineOptions({ name: 'AddCategoryModal', inheritAttrs: false })

const requestStore = useRequestStore()
const secretCategoryStore = useSecretCategoryStore()

const formRef = ref()
const addCategoryFormRef = ref()

const state = reactive<{ modalOpen: boolean; modalTitle: string }>({
  modalTitle: '分类',
  modalOpen: false
})

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
