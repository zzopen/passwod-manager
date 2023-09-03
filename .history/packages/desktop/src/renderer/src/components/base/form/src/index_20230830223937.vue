<script lang="ts" setup>
import { useNamespace } from '@renderer/components/_shared'
import { formProps } from './props'
import { Form } from 'ant-design-vue'

defineOptions({ name: 'XlBaseForm', inheritAttrs: false })

const { b } = useNamespace('form')
const getClass = computed(() => {
  return [b()]
})

const props = defineProps(formProps())
const useForm = Form.useForm
const rulesRef = reactive({})
const { validate, validateInfos } = useForm(props.model, rulesRef)
// const model = reactive({})

const onClick = () => {
  console.log('model:', props.model)
}
</script>

<template>
  <div :class="getClass">
    <a-button @click="onClick">点我测试</a-button>
    <a-form ref="formRef" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item v-for="(item, index1) in schemas" :key="index1" :label="item.label">
        <template v-if="item.ele == 'input'">
          <a-input
            v-model:value="model[item.name]"
            :placeholder="item.placeholder"
            style="width: 200px"
          />
        </template>
      </a-form-item>
    </a-form>
  </div>
</template>
