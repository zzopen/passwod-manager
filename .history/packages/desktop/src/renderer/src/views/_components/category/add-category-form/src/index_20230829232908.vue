<script lang="ts" setup>
import { type FormState, addCategoryFormProps, defaultFormState } from './props'
import { consoleLog } from '@renderer/shared'
import type { SelectProps, SelectValue } from '@renderer/shared'
import { Form } from 'ant-design-vue'
import { useSecretCategoryStore } from '@renderer/stores'

defineOptions({ name: 'AddCategoryForm', inheritAttrs: false })

const secretCategoryStore = useSecretCategoryStore()

const emit = defineEmits<{
  (e: 'check-success', formState: FormState): void
  (e: 'check-fail'): void
}>()

defineProps(addCategoryFormProps())

// const options = ref<SelectProps['options']>([
//   { value: 'jack', label: 'Jack' },
//   { value: 'lucy', label: 'Lucy' },
//   { value: 'tom', label: 'Tom' }
// ])

const options = computed(() => {
  console.log('secretCategoryStore.categorySelectOptions:', secretCategoryStore.categorySelectOptions)
  return secretCategoryStore.categorySelectOptions
})

const formRef = ref()
let formStateRef: FormState = shallowReactive({ ...defaultFormState })
const rulesRef = reactive({
  pid: [{ required: false, message: '请选择父级' }],
  name: [{ required: true, message: '请输入分类名称' }]
})

const useForm = Form.useForm
const { validate, validateInfos } = useForm(formStateRef, rulesRef, {
  onValidate: (...args) => console.log(...args)
})

// const onFinish = (values: any) => {
//   consoleLog('Success:', values)
//   emit('check-success', unref(formState))
// }

// const onFinishFailed = (errorInfo: any) => {
//   consoleLog('Failed:', errorInfo)
//   emit('check-fail')
// }

// const onSubmit = (e: Event) => {
//   consoleLog('Submit:', e)
// }

const resetForm = () => {
  formRef.value.resetFields()
  consoleLog('resetForm:', unref(formStateRef))
}

const setFormState = (state: FormState) => {
  formStateRef = Object.assign(formStateRef, { ...state })
}

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

const getFormData = () => {
  return toRaw(formStateRef)
}

defineExpose({
  setFormState,
  submit,
  getFormData
})
</script>

<template>
  <div class="add-category-form">
    <a-form ref="formRef" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="父级" v-bind="validateInfos.pid">
        <a-select
          v-model:value="formStateRef.pid"
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
        <a-input v-model:value="formStateRef.name" placeholder="请输入名称" style="width: 200px" />
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.add-category-form {
}
</style>
