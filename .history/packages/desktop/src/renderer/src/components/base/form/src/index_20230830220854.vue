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
    <a-form ref="formRef" :model="model" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item v-for="(item, index1) in formItems" :key="index1" :label="item.label">
        <template v-if="item.ele == 'input'">
          <a-input
            v-model:value="dataSourceRef.name"
            placeholder="请输入名称"
            style="width: 200px"
          />
        </template>
      </a-form-item>
    </a-form>
  </div>
</template>
