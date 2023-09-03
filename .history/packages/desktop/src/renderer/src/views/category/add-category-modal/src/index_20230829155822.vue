<script lang="ts" setup>
import { listenerOpenAddCategoryModal, message } from '@renderer/shared'
import AddCategoryForm from '@renderer/views/category/add-category-form'

defineOptions({ name: 'AddCategoryModal', inheritAttrs: false })

const modalRef = ref()

const open = () => {
  modalRef.openModal()
}

const openModal = () => {
  open()
}

const onCancel = () => {}

const onOk = () => {
  message.info('创建成功')
}

listenerOpenAddCategoryModal(openModal)
defineExpose({
  open
})
</script>

<template>
  <div class="add-category">
    <m-modal ref="modalRef" @cancel="onCancel" @ok="onOk">
      <add-category-form />
    </m-modal>
  </div>
</template>

<style lang="scss" scoped>
.add-category {
}
</style>
