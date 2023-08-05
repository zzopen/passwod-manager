<script setup lang="ts">
import { type FormState, addCategoryFormProps } from './props'
import { consoleLog } from '@/business/utils'

defineOptions({
  name: 'AddCategoryForm',
  inheritAttrs: false
})

const emit = defineEmits<{
  (e: 'check-success', formState: FormState): void
  (e: 'check-fail'): void
}>()

const props = defineProps(addCategoryFormProps())

const formRef = ref()
const formState = reactive<FormState>({
  ...props.formState
})

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
  consoleLog('resetForm:')
}

defineExpose({
  resetForm
})
</script>

<template>
  <div class="add-category-form">
    <a-form
      ref="formRef"
      name="add-category"
      :model="formState"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @submit="onSubmit"
      @finish-failed="onFinishFailed"
    >
      <a-form-item label="网址" name="website" :rules="[{ required: true, message: '请输入网址' }]">
        <a-input v-model:value="formState.website" />
      </a-form-item>
      <a-form-item label="账号" name="account" :rules="[{ required: true, message: '请输入账号' }]">
        <a-input v-model:value="formState.account" />
      </a-form-item>
      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
