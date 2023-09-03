<script lang="ts" setup>
import { addCategoryFormProps } from './props'
import { Form, useVModel } from '@renderer/shared'
import { useSecretCategoryStore } from '@renderer/stores'

defineOptions({ name: 'AddCategoryForm', inheritAttrs: false })

const props = defineProps(addCategoryFormProps())
const emits = defineEmits(['update:dataSource', 'success'])
const secretCategoryStore = useSecretCategoryStore()
const options = computed(() => {
  return secretCategoryStore.getSecretCategorySelectOptions
})

const dataSourceRef = useVModel(props, 'dataSource', emits)
const rulesRef = reactive({
  pid: [{ required: false, message: '请选择父级' }],
  name: [{ required: true, message: '请输入分类名称' }]
})

const useForm = Form.useForm
const { validate, validateInfos } = useForm(dataSourceRef, rulesRef, {
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
    <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="父级" v-bind="validateInfos.pid">
        <a-select
          v-model:value="dataSourceRef.pid"
          show-search
          allow-clear
          placeholder="请选择父级"
          style="width: 200px"
          :options="options"
          :filter-option="filterOption"
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
