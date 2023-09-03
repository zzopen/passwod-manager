<script lang="ts" setup>
import { useNamespace } from '@renderer/components/_shared'
import { formProps } from './props'

defineOptions({ name: 'XlBaseForm', inheritAttrs: false })

const { b } = useNamespace('form')
const getClass = computed(() => {
  return [b()]
})

defineProps(formProps())
</script>

<template>
  <div :class="getClass">
   <a-form ref="formRef" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"></a-form>
   </a-form></div>
</template>
