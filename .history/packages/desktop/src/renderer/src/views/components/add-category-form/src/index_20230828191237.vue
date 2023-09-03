<script lang="ts" setup>
import { type FormState, addCategoryFormProps, defaultFormState } from './props'
import { consoleLog } from '@renderer/share'
import type { SelectProps, SelectValue } from '@renderer/share'

defineOptions({
  name: 'AddCategoryForm',
  inheritAttrs: false
})

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

const value = ref<string | undefined>(undefined)
/**************** */
defineExpose({
  setFormState,
  resetForm
})
</script>

<template>
  <div class="add-category-form">
    <a-form
      ref="formRef"
      name="update-account"
      :model="formState"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @submit="onSubmit"
      @finish-failed="onFinishFailed"
    >
      <a-form-item label="父级" name="website" :rules="[{ required: true, message: '请输入网址' }]">
        <a-select
          v-model:value="formState.website"
          show-search
          allow-clear
          placeholder="Select a person"
          style="width: 200px"
          :options="options"
          :filter-option="filterOption"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        ></a-select>
      </a-form-item>
      <a-form-item label="分类" name="account" :rules="[{ required: true, message: '请输入账号' }]">
        <a-input v-model:value="formState.account" />
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
@renderer/shared@renderer/shared
