import { ExtractPropTypes } from 'vue'

export interface FormSchema {}

export interface FormItemSchema {
  ele: string // 表单项类型
  name: string // 数据 key名称
  label?: string // 表单 label
  placeholder?: string // 表单 placeholder
  rule?: Record<string, any>[] // 表单数据项校验规则
  labelCol?: any
  labelAlign?: 'left' | 'right'
}

export type FormItemSchemas = FormItemSchema[]

export const formProps = () => ({
  model: {
    type: Object as any,
    required: true
  },
  formSchema: {
    type: Array as PropType<FormSchemas>,
    default() {
      return []
    }
  },
  formItemSchemas: {
    type: Array as PropType<FormItemSchemas>,
    default() {
      return []
    }
  }
})

export type FormProps = ExtractPropTypes<ReturnType<typeof formProps>>
