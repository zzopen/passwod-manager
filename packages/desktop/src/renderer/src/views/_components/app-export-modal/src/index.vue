<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import { message } from '@renderer/shared/deps'
import { listenerOpenExportDataModal } from '@renderer/shared'
import { AppExportForm, type DataSource } from '@renderer/views/_components/app-export-form'
import { delay } from '@common/shared'

defineOptions({ name: 'AppExportModal', inheritAttrs: false })

const { b } = useNamespace('app-export-modal')
const getClass = computed(() => {
  return [b()]
})

const formRef = ref()
const state = reactive<{ modalOpen: boolean; modalTitle: string; formDataSource: DataSource }>({
  modalTitle: '导出数据',
  modalOpen: false,
  formDataSource: {
    format: 'json',
    encrypt: '2',
    outDir: '',
    fileName: 'cipher'
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

  message.success('导出成功')
  await delay(600)
  onCancel()
}

const ready = async () => {
  state.modalOpen = true
  state.formDataSource.outDir = await window.preloadContext.mix.getAppDownloadDirPath()
}

listenerOpenExportDataModal(ready)
</script>

<template>
  <div :class="getClass">
    <xl-base-modal
      v-model:open="state.modalOpen"
      :title="state.modalTitle"
      @cancel="onCancel"
      @ok="onOk"
    >
      <app-export-form ref="formRef" :data-source="state.formDataSource" />
    </xl-base-modal>
  </div>
</template>

<style lang="scss" scoped>
.app-export-modal {
}
</style>
