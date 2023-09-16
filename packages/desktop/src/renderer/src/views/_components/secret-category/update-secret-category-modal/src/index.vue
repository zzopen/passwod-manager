<script lang="ts" setup>
import { message } from '@renderer/shared/deps'
import {
  listenerOpenUpdateSecretCategoryModal,
  emitLoadSecretCategoryMenuList
} from '@renderer/shared'
import {
  UpdateSecretCategoryForm,
  type DataSource
} from '@renderer/views/_components/secret-category/update-secret-category-form'
import { useRequestStore } from '@renderer/stores'
import { useNamespace } from '@renderer/shared'

defineOptions({ name: 'UpdateSecretCategoryModal', inheritAttrs: false })
const requestStore = useRequestStore()
const { b } = useNamespace('update-secret-category-modal')
const getClass = computed(() => {
  return [b()]
})

const formRef = ref()
const state = reactive<{ modalOpen: boolean; modalTitle: string; formDataSource: DataSource }>({
  modalTitle: '',
  modalOpen: false,
  formDataSource: {
    id: '',
    name: '',
    pid: ''
  }
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

  message.success('修改成功')
  emitLoadSecretCategoryMenuList()
  onCancel()
}

const ready = async (p: { secret_category_id: string }) => {
  const res = await requestStore.getSecretCategoryDetail({ id: p.secret_category_id })
  if (!res) {
    message.error('查询分类信息失败')
    return
  }
  state.modalTitle = `修改分类~${res.name}`
  state.modalOpen = true
  state.formDataSource = {
    id: res.id,
    name: res.name,
    pid: res.pid == '0' || !res.pid ? undefined : res.pid
  }
}

listenerOpenUpdateSecretCategoryModal(ready)
</script>

<template>
  <div :class="getClass">
    <xl-base-modal
      v-model:open="state.modalOpen"
      :title="state.modalTitle"
      @cancel="onCancel"
      @ok="onOk"
    >
      <update-secret-category-form ref="formRef" v-model:data-source="state.formDataSource" />
    </xl-base-modal>
  </div>
</template>

<style lang="scss" scoped>
.update-secret-category-modal {
}
</style>
