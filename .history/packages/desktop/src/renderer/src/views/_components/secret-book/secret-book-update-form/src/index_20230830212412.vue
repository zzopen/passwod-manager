<script lang="ts" setup>
import { type DataSource, updateAccountFormProps, defaultDataSource } from './props'
import type { SelectValue } from '@renderer/shared'
import { Form } from 'ant-design-vue'
import { useSecretCategoryStore } from '@renderer/stores'

defineOptions({ name: 'AddCategoryForm', inheritAttrs: false })

const secretCategoryStore = useSecretCategoryStore()

defineProps(updateAccountFormProps())

const options = computed(() => {
  return secretCategoryStore.categorySelectOptions
})

const formRef = ref()
const dataSourceRef = shallowReactive<DataSource>({ ...defaultDataSource })
const rulesRef = reactive({
  pid: [{ required: false, message: '请选择父级' }],
  name: [{ required: true, message: '请输入分类名称' }]
})

const useForm = Form.useForm
const { validate, validateInfos } = useForm(dataSourceRef, rulesRef, {
  onValidate: (...args) => console.log(...args)
})
/**************** */

const handleChange = (value: SelectValue) => {
  console.log(`selected ${value}`)
}
const handleBlur = () => {
  console.log('blur')
}
const handleFocus = () => {
  console.log('focus')
}
const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
}
/**************** */

const submit = async () => {
  try {
    await validate()
    return
  } catch (error) {
    console.log('submit error:', error)
  }

  return Promise.reject()
}

const getDataSource = () => {
  return toRaw(dataSourceRef)
}

defineExpose({
  submit,
  getDataSource
})
</script>

<template>
  <div class="add-category-form">
    <a-form ref="formRef" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="父级" v-bind="validateInfos.pid">
        <a-select
          v-model:value="dataSourceRef.pid"
          show-search
          allow-clear
          placeholder="请选择父级"
          style="width: 200px"
          :options="options"
          :filter-option="filterOption"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        ></a-select>
      </a-form-item>
      <a-form-item label="分类名称" v-bind="validateInfos.name">
        <a-input v-model:value="dataSourceRef.name" placeholder="请输入名称" style="width: 200px" />
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.add-category-form {
}
</style>
