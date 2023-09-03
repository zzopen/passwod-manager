<script lang="ts" setup>
import { type FormState, addCategoryFormProps, defaultFormState } from './props'
import { consoleLog } from '@renderer/shared'
import type { SelectProps, SelectValue } from '@renderer/shared'
import { Form } from 'ant-design-vue'

defineOptions({ name: 'AddCategoryForm', inheritAttrs: false })

const useForm = Form.useForm

const emit = defineEmits<{
  (e: 'check-success', formState: FormState): void
  (e: 'check-fail'): void
}>()

defineProps(addCategoryFormProps())

const formRef = ref()
let formState: FormState = shallowReactive({ ...defaultFormState })

const onFinish = (values: any) => {
  consoleLog('Success:', values)
  emit('check-success', unref(formState))
}

const onFinishFailed = (errorInfo: any) => {
  consoleLog('Failed:', errorInfo)
  emit('check-fail')
}

const onSubmit = (e: Event) => {
  consoleLog('Submit:', e)
}

const resetForm = () => {
  formRef.value.resetFields()
  consoleLog('resetForm:', unref(formState))
}

const setFormState = (state: FormState) => {
  formState = Object.assign(formState, { ...state })
}

/**************** */

const options = ref<SelectProps['options']>([
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' }
])
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
defineExpose({
  setFormState,
  resetForm
})
</script>

<template>
  <div class="add-category-form">
    <a-form ref="formRef" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="父级" name="pid" :rules="[{ required: true, message: '请选择父级' }]">
        <a-select
          v-model:value="formState.pid"
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
      <a-form-item
        label="分类名称"
        name="name"
        :rules="[{ required: true, message: '请输入名称' }]"
      >
        <a-input v-model:value="formState.name" placeholder="请输入名称" style="width: 200px" />
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.add-category-form {
}
</style>
