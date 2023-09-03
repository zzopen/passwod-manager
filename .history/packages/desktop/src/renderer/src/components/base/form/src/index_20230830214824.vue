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
    <a-form ref="formRef" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <template v-for="(item, index) in formItems" :key="index">
        <a-form-item :label="item.label"> </a-form-item>
      </template>
    </a-form>
  </div>
</template>
