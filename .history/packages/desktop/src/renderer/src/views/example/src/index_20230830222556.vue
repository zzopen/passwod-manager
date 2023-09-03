<script lang="ts" setup>
defineOptions({ name: 'Example' })

const schemas = [
  { ele: 'input', name: 'student', label: '学生', placeholder: '请输入学生' },
  { ele: 'input', name: 'teacher', label: '老师', placeholder: '请输入老师' }
]

const model = reactive({
  student: '',
  teacher: ''
})
</script>

<template>
  <div>Example</div>
  <xl-base-form :schemas="schemas" :model="model" />
</template>

<style scoped lang="scss"></style>
