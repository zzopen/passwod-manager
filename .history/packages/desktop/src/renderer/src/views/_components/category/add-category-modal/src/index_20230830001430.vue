<script lang="ts" setup>
import { listenerOpenAddCategoryModal, message } from '@renderer/shared'
import AddCategoryForm from '@renderer/views/_components/category/add-category-form'
import { useRequestStore, useSecretCategoryStore } from '@renderer/stores'

defineOptions({ name: 'AddCategoryModal', inheritAttrs: false })

const requestStore = useRequestStore()
const secretCategoryStore = useSecretCategoryStore()

const modalRef = ref()
const addCategoryFormRef = ref()
const openModal = () => {
  modalRef && modalRef.value.openModal()
}

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

  return addCategoryFormRef.value.getFormData()
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

  await requestStore.createCategory(newFormData)
  message.info('创建成功')
  closeModal()
  await secretCategoryStore.refreshLoadCategoryList()
}

listenerOpenAddCategoryModal(openModal)
defineExpose({
  open
})
</script>

<template>
  <div class="add-category">
    <m-modal ref="modalRef" title="添加分类" @cancel="onCancel" @ok="onOk">
      <add-category-form ref="addCategoryFormRef" />
    </m-modal>
  </div>
</template>

<style lang="scss" scoped>
.add-category {
}
</style>
