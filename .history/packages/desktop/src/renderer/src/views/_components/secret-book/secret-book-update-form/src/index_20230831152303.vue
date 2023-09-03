<script lang="ts" setup>
import { secretBookUpdateFormProps } from './props'
import { useSecretCategoryStore, useRequestStore, useSecretBookStore } from '@renderer/stores'
import { useVModel } from '@vueuse/core'
import { Form } from '@renderer/shared'

defineOptions({ name: 'SecretBookUpdateForm', inheritAttrs: false })

const requestStore = useRequestStore()
const secretBookStore = useSecretBookStore()
const props = defineProps(secretBookUpdateFormProps())

const emits = defineEmits(['update:dataSource', 'success'])

const secretCategoryStore = useSecretCategoryStore()

const options = computed(() => {
  return secretCategoryStore.categorySelectOptions
})

const formRef = ref()
const dataSourceRef = useVModel(props, 'dataSource', emits)
const rulesRef = reactive({
  title: [{ required: false, message: '请输入标题' }],
  website: [{ required: true, message: '请输入网址' }],
  username: [{ required: true, message: '请输入账号' }],
  password: [{ required: true, message: '请输入密码' }],
  secretCategoryId: [{ required: false, message: '请选择分类' }]
})

const useForm = Form.useForm
const { validate, validateInfos, resetFields } = useForm(dataSourceRef, rulesRef, {
  onValidate: (...args) => console.log(...args)
})

const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

const onSubmit = async () => {
  try {
    await validate()
    requestStore.updateSecretBook(unref(dataSourceRef))
    emits('success')
    return
  } catch (error) {
    console.log('submit error:', error)
  }

  return Promise.reject()
}
</script>

<template>
  <div>
    <a-form ref="formRef" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
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
          :filter-option="filterOption"
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
