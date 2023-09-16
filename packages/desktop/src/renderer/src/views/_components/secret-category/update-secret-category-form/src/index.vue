<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import { updateSecretCategoryFormProps } from './props'
import { Form, useVModel } from '@renderer/shared/deps'
import { useRequestStore, useSecretCategoryStore } from '@renderer/stores'
import type { ArpUpdateSecretCategory } from '@renderer/apis'
import { consoleLog } from '@renderer/shared'

defineOptions({ name: 'UpdateSecretCategoryForm', inheritAttrs: false })

const { b } = useNamespace('update-secret-category-form')
const getClass = computed(() => {
  return [b()]
})

const props = defineProps(updateSecretCategoryFormProps())
const emits = defineEmits(['update:dataSource', 'success'])
const requestStore = useRequestStore()
const secretCategoryStore = useSecretCategoryStore()
const useForm = Form.useForm
const options = computed(() => {
  return secretCategoryStore.getSecretCategorySelectOptions
})

const dataSourceRef = useVModel(props, 'dataSource', emits, {
  passive: true,
  deep: true
})

const rulesRef = reactive({
  pid: [{ required: false, message: '请选择父级' }],
  name: [{ required: true, message: '请输入分类名称' }]
})

const { resetFields, validate, validateInfos } = useForm(dataSourceRef, rulesRef)
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
  const formData: ArpUpdateSecretCategory = unref(dataSourceRef)
  const isSuccess = await requestStore.updateSecretCategory(formData)
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
      <a-form-item label="分类名称" v-bind="validateInfos.name">
        <a-input v-model:value="dataSourceRef.name" placeholder="请输入名称" style="width: 200px" />
      </a-form-item>
      <a-form-item label="父级" v-bind="validateInfos.pid">
        <a-select
          v-model:value="dataSourceRef.pid"
          allow-clear
          placeholder="请选择父级"
          style="width: 200px"
          :options="options"
        ></a-select>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.update-secret-category-form {
}
</style>
