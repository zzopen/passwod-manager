<script lang="ts" setup>
import { createSecretBookFormProps } from './props'
import { useRequestStore } from '@renderer/stores'
import { Form, useVModel } from '@renderer/shared/deps'
import { lodashFn } from '@common/shared/deps'
import type { ArpCreateSecretBook } from '@renderer/apis'
import { consoleLog } from '@renderer/shared'

defineOptions({ name: 'CreateSecretBookForm', inheritAttrs: false })

const requestStore = useRequestStore()
const props = defineProps(createSecretBookFormProps())
const useForm = Form.useForm
const emits = defineEmits(['update:dataSource', 'success'])

const options = computed(() => {
  return props.secretCategoryOptions
})

const dataSourceRef = useVModel(props, 'dataSource', emits, {
  passive: true,
  deep: true
})

const rulesRef = reactive({
  title: [{ required: true, message: '请输入标题' }],
  website: [{ required: true, message: '请输入网址' }],
  username: [{ required: true, message: '请输入账号' }],
  password: [{ required: true, message: '请输入密码' }],
  secretCategoryId: [{ required: false, message: '请选择分类' }]
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

  const formData: ArpCreateSecretBook = {
    ...lodashFn.omit(unref(dataSourceRef), 'secretCategoryId'),
    secret_category_id: dataSourceRef.value.secretCategoryId ?? ''
  }

  const isSuccess = await requestStore.createSecretBook(formData)
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
          allow-clear
          placeholder="请输入标题"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="网址" v-bind="validateInfos.website">
        <a-input
          v-model:value="dataSourceRef.website"
          allow-clear
          placeholder="请输入名称"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="账号" v-bind="validateInfos.username">
        <a-input
          v-model:value="dataSourceRef.username"
          allow-clear
          placeholder="请输入名称"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input-password
          v-model:value="dataSourceRef.password"
          allow-clear
          placeholder="请输入名称"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="分类" v-bind="validateInfos.secretCategoryId">
        <a-select
          v-model:value="dataSourceRef.secretCategoryId"
          allow-clear
          placeholder="请选择分类"
          style="width: 200px"
          :options="options"
        ></a-select>
      </a-form-item>
      <a-form-item label="邮箱" v-bind="validateInfos.email">
        <a-input
          v-model:value="dataSourceRef.email"
          allow-clear
          placeholder="请输入邮箱"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="手机号" v-bind="validateInfos.mobile">
        <a-input
          v-model:value="dataSourceRef.mobile"
          allow-clear
          placeholder="请输入手机号"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="备注" v-bind="validateInfos.remark">
        <a-textarea
          v-model:value="dataSourceRef.remark"
          allow-clear
          placeholder="请输入备注"
          style="width: 200px"
          :rows="3"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click.prevent="onSubmit">提交</a-button>
        <a-button style="margin-left: 10px" @click="resetFields">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped></style>
