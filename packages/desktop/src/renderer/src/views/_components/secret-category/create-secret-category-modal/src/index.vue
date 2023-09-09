<script lang="ts" setup>
import { message } from '@renderer/shared/deps'
import {
  listenerOpenCreateSecretCategoryModal,
  emitLoadSecretCategoryMenuList
} from '@renderer/shared'
import { CreateSecretCategoryForm } from '@renderer/views/_components/secret-category/create-secret-category-form'

defineOptions({ name: 'CreateSecretCategoryModal', inheritAttrs: false })

const formRef = ref()
const state = reactive<{ modalOpen: boolean; modalTitle: string }>({
  modalTitle: '创建分类',
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
  <div class="create-secret-category-modal">
    <xl-base-modal
      v-model:open="state.modalOpen"
      :title="state.modalTitle"
      @cancel="onCancel"
      @ok="onOk"
    >
      <create-secret-category-form ref="formRef" />
    </xl-base-modal>
  </div>
</template>

<style lang="scss" scoped>
.create-secret-category-modal {
}
</style>
