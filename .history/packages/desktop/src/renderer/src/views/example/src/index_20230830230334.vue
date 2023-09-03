<script lang="ts" setup>
defineOptions({ name: 'Example' })

const schemas = [
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
    ]
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

const onClick = () => {
  console.log('父级model:', model)
}
</script>

<template>
  <div>Example</div>
  <a-button @click="onClick">测试</a-button>
  <xl-base-form :schemas="schemas" :model="model" />
</template>

<style scoped lang="scss"></style>
