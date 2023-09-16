<script lang="ts" setup>
import { useNamespace, consoleLog } from '@renderer/shared'
import { appExportFormProps } from './props'
import { useRequestStore } from '@renderer/stores'
import { Form, useVModel } from '@renderer/shared/deps'
import type { ArpExportData } from '@renderer/apis'

defineOptions({ name: 'AppExportForm', inheritAttrs: false })
const { b } = useNamespace('app-export-form')
const getClass = computed(() => {
  return [b()]
})

const requestStore = useRequestStore()
const props = defineProps(appExportFormProps())
const useForm = Form.useForm
const emits = defineEmits(['update:dataSource', 'success'])

const formatOptions = computed(() => {
  return [
    { value: 'json', label: 'json' },
    { value: 'csv', label: 'csv' }
  ]
})

const dataSourceRef = useVModel(props, 'dataSource', emits, {
  passive: true,
  deep: true
})

const rulesRef = reactive({
  format: [{ required: true, message: '请选择导出格式' }],
  encrypt: [{ required: true, message: '请选择是否加密' }],
  outDir: [{ required: true, message: '请输入导出路径' }],
  fileName: [{ required: true, message: '请输入导出文件名' }]
})

const { validate, validateInfos, resetFields } = useForm(dataSourceRef, rulesRef)

const onSubmit = async () => {
  try {
    await validate()
    const res = await submitForm()
    if (!res) {
      return false
    }

    emits('success')
    return true
  } catch (error) {
    consoleLog('submit error:', error)
    return false
  }
}

const submitForm = async () => {
  // 表单提交

  const formData: ArpExportData = {
    format: unref(dataSourceRef).format,
    encrypt: unref(dataSourceRef).encrypt,
    out_dir: unref(dataSourceRef).outDir,
    file_name: unref(dataSourceRef).fileName
  }

  const isSuccess = await requestStore.exportData(formData)
  if (!isSuccess) {
    return false
  }

  return true
}

defineExpose({
  onSubmit,
  resetFields
})
</script>

<template>
  <div :class="getClass">
    <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="格式" v-bind="validateInfos.format">
        <a-select
          v-model:value="dataSourceRef.format"
          allow-clear
          placeholder="请选择格式"
          style="width: 200px"
          :options="formatOptions"
        ></a-select>
      </a-form-item>
      <a-form-item label="加密" v-bind="validateInfos.encrypt">
        <a-radio-group v-model:value="dataSourceRef.encrypt">
          <a-radio value="1">是</a-radio>
          <a-radio value="2">否</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="输出路径" v-bind="validateInfos.outDir">
        <a-input
          v-model:value="dataSourceRef.outDir"
          allow-clear
          placeholder="请输入输出路径"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="文件名" v-bind="validateInfos.fileName">
        <a-input
          v-model:value="dataSourceRef.fileName"
          allow-clear
          placeholder="请输入文件名"
          style="width: 200px"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.app-export-form {
}
</style>
