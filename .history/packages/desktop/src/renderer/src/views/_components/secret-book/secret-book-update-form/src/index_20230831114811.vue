<script lang="ts" setup>
import { updateAccountFormProps } from './props'
import { Form } from 'ant-design-vue'
import { useSecretCategoryStore } from '@renderer/stores'
import { useVModel } from '@vueuse/core'

defineOptions({ name: 'SecretBookUpdateForm', inheritAttrs: false })
const props = defineProps(updateAccountFormProps())

const emits = defineEmits<{
  (e: 'update:dataSource', v: boolean): void
}>()
const secretCategoryStore = useSecretCategoryStore()

const options = computed(() => {
  return secretCategoryStore.categorySelectOptions
})

const formRef = ref()
const dataSourceRef = useVModel(props, 'dataSource', emits)
const rulesRef = reactive({
  title: [{ required: false, message: '请输入标题' }],
  website: [{ required: true, message: '请输入网址' }],
  account: [{ required: true, message: '请输入账号' }],
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

const submit = async () => {
  try {
    await validate()
    return
  } catch (error) {
    console.log('submit error:', error)
  }

  return Promise.reject()
}

defineExpose({
  submit
})
</script>

<template>
  <div>
    <a-form ref="formRef" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="标题" v-bind="validateInfos.name">
        <a-input
          v-model:value="dataSourceRef.title"
          placeholder="请输入标题"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="网址" v-bind="validateInfos.name">
        <a-input
          v-model:value="dataSourceRef.website"
          placeholder="请输入名称"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="账号" v-bind="validateInfos.name">
        <a-input
          v-model:value="dataSourceRef.account"
          placeholder="请输入名称"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.name">
        <a-input
          v-model:value="dataSourceRef.password"
          placeholder="请输入名称"
          style="width: 200px"
        />
      </a-form-item>
      <a-form-item label="分类" v-bind="validateInfos.pid">
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
        <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped></style>
