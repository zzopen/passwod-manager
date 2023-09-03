<script lang="ts" setup>
import { listenerOpenAddCategoryModal, message } from '@renderer/shared'
import AddCategoryForm from '@renderer/views/category/add-category-form'
import { useEventStore } from '@renderer/stores'

defineOptions({ name: 'AddCategoryModal', inheritAttrs: false })

const modalRef = ref()
const addCategoryFormRef = ref()
const openModal = () => {
  modalRef && modalRef.value.openModal()
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

  message.info('创建成功')
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
