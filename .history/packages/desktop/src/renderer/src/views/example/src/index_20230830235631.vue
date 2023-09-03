<script lang="ts" setup>
defineOptions({ name: 'Example' })

const formRef = ref()
const formItemSchemas = [
  {
    ele: 'input',
    name: 'student',
    label: '学生',
    placeholder: '请输入学生',
    rule: [
      {
        required: true,
        message: '请输入学生1',
        trigger: 'change'
      }
    ],
    style: { width: '200px' }
  },
  {
    ele: 'input',
    name: 'teacher',
    label: '老师',
    placeholder: '请输入老师',
    rule: [
      {
        required: false,
        message: '请输入老师1'
      }
    ]
  }
]

const model = reactive({
  student: '',
  teacher: ''
})

const onSubmit = async () => {
  await formRef.value.formValidate()
  console.log('校验成功', unref(model))
}

const onReset = () => {
  formRef.value.formReset()
}
</script>

<template>
  <div>Example</div>
  <xl-base-form ref="formRef" :form-item-schemas="formItemSchemas" :model="model" />
  <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
  <a-button style="margin-left: 10px" @click="onReset">Reset</a-button>
</template>

<style scoped lang="scss"></style>
