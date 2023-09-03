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
      <template v-for="(item, index1) in formItems">
        <a-form-item :key="index1" :label="item.label"> </a-form-item>
      </template>
    </a-form>
  </div>
</template>
