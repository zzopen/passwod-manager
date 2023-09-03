<script lang="ts" setup>
import { useNamespace } from '@renderer/components/_shared'
import { formProps } from './props'
import type { FormSchema } from './props'
import { Form } from 'ant-design-vue'

defineOptions({ name: 'XlBaseForm', inheritAttrs: false })

const { b } = useNamespace('form')
const getClass = computed(() => {
  return [b()]
})

const props = defineProps(formProps())
const useForm = Form.useForm
const rulesRef = reactive({})
const { resetFields, validate, validateInfos } = useForm(props.model, rulesRef)

watchEffect(() => {
  const schemas = props.schemas
  if (schemas && schemas.length > 0) {
    for (const item of props.schemas) {
      if (item.rule) {
        rulesRef[item.name] = item.rule
      }
    }
  } else {
    Object.assign(rulesRef, {})
  }

  console.log('rulesRef:', rulesRef)
})

const onSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(props.model))
    })
    .catch((err) => {
      console.log('error', err)
    })
}

const formatLabel = (item: FormSchema) => {
  return item.label
}

const onClick = () => {
  console.log('model:', props.model)
}

defineExpose({
  formValidate: validate,
  formReset: resetFields
})
</script>

<template>
  <div :class="getClass">
    <a-button @click="onClick">点我测试</a-button>
    <a-form ref="formRef" :label-col="formSchema.labelCol" :wrapper-col="formSchema.labelWrap">
      <a-form-item
        v-for="(item, index1) in schemas"
        :key="index1"
        :label="formatLabel(item)"
        :label-align="item.labelAlign"
        v-bind="validateInfos[item.name]"
      >
        <template v-if="item.ele == 'input'">
          <a-input
            v-model:value="model[item.name]"
            :placeholder="item.placeholder"
            style="width: 200px"
          />
        </template>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <!-- <a-button type="primary" @click.prevent="onSubmit">Create</a-button> -->
        <!-- <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button> -->
      </a-form-item>
    </a-form>
  </div>
</template>
