<script lang="ts" setup>
import { secretBookUpdateFormProps } from './props'
import { useSecretCategoryStore, useRequestStore } from '@renderer/stores'
import { Form, useVModel } from '@renderer/shared'
import { lodashFn } from '@common/deps'

defineOptions({ name: 'SecretBookUpdateForm', inheritAttrs: false })

const requestStore = useRequestStore()
const props = defineProps(secretBookUpdateFormProps())

const emits = defineEmits(['update:dataSource', 'success'])

const secretCategoryStore = useSecretCategoryStore()

const options = computed(() => {
  console.log(secretCategoryStore.getSecretCategorySelectOptions)
  return secretCategoryStore.getSecretCategorySelectOptions
})

const dataSourceRef = useVModel(props, 'dataSource', emits)
const rulesRef = reactive({
  title: [{ required: false, message: '请输入标题' }],
  website: [{ required: true, message: '请输入网址' }],
  username: [{ required: true, message: '请输入账号' }],
  password: [{ required: true, message: '请输入密码' }],
  secretCategoryId: [{ required: false, message: '请选择分类' }]
})

const useForm = Form.useForm
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
    console.log('submit error:', error)
    return false
  }
}

const submitForm = async () => {
  // 表单提交

  let formData = lodashFn.omit(unref(dataSourceRef), 'secretCategoryId')
  formData = { ...formData, secret_category_id: dataSourceRef.value.secretCategoryId }

  delete formData.secretCategoryId
  const isSuccess = await requestStore.updateSecretBook(formData)
  if (!isSuccess) {
    return false
  }

  return true
}
</script>

<template>
  <div>
    <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="标题" v-bind="validateInfos.title">
        <a-input
          v-model:value="dataSourceRef.title"
          placeholder="请输入标题"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="网址" v-bind="validateInfos.website">
        <a-input
          v-model:value="dataSourceRef.website"
          placeholder="请输入名称"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="账号" v-bind="validateInfos.username">
        <a-input
          v-model:value="dataSourceRef.username"
          placeholder="请输入名称"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input
          v-model:value="dataSourceRef.password"
          placeholder="请输入名称"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="分类" v-bind="validateInfos.secretCategoryId">
        <a-select
          v-model:value="dataSourceRef.secretCategoryId"
          show-search
          allow-clear
          placeholder="请选择分类"
          style="width: 200px"
          :options="options"
        ></a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click.prevent="onSubmit">提交</a-button>
        <a-button style="margin-left: 10px" @click="resetFields">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped></style>
