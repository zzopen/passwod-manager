<script lang="ts" setup>
import { listenerOpenAddCategoryModal, message } from '@renderer/shared'
import AddCategoryForm from '@renderer/views/category/add-category-form'

defineOptions({ name: 'AddCategoryModal', inheritAttrs: false })

const modalRef = ref()
const addCategoryFormRef = ref()
const openModal = () => {
  modalRef && modalRef.value.openModal()
}

const submitForm = () => {
  addCategoryFormRef && addCategoryFormRef.value.submit()
}

const onCancel = () => {}
const onOk = async () => {
  try {
    await submitForm()
    message.info('创建成功')
  } catch (err) {
    console.log('err:', err)
  }
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
