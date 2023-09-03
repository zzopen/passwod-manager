<script lang="ts" setup>
import { message, listenerOpenCreateSecretCategoryModal } from '@renderer/shared'
import {
  AddSecretCategoryForm,
  type DataSource
} from '@renderer/views/_components/category/add-category-form'
import { useRequestStore, useSecretCategoryStore } from '@renderer/stores'

defineOptions({ name: 'AddCategoryModal', inheritAttrs: false })

const requestStore = useRequestStore()
const secretCategoryStore = useSecretCategoryStore()

const modalRef = ref()
const addCategoryFormRef = ref()

const state = reactive<{ modalOpen: boolean; modalTitle: string; dataSource: DataSource }>({
  modalTitle: '分类',
  modalOpen: false,
  dataSource: {
    pid: '',
    name: ''
  }
})

const closeModal = () => {
  modalRef && modalRef.value.closeModal()
}

const submitForm = async () => {
  if (addCategoryFormRef) {
    await addCategoryFormRef.value.submit()
    return
  }

  return Promise.reject()
}

const getFormData = () => {
  if (!addCategoryFormRef) {
    return null
  }

  return addCategoryFormRef.value.getSourceData()
}

const onCancel = () => {}
const onOk = async () => {
  await submitForm()
  const formData = getFormData()
  console.log('formData:', formData)

  const newFormData: any = { name: formData.name }
  if (formData.pid && formData.pid != '') {
    newFormData.pid = formData.pid
  }

  await requestStore.createSecretCategory(newFormData)
  message.info('创建成功')
  closeModal()
  // await secretCategoryStore.refreshLoadCategoryList()
}

const onSuccess = () => {}

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
      <add-secret-category-form
        ref="addCategoryFormRef"
        :data-source="state.dataSource"
        @success="onSuccess"
      />
    </xl-base-modal>
  </div>
</template>

<style lang="scss" scoped>
.add-category-modal {
}
</style>
