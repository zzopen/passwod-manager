import { ExtractPropTypes } from 'vue'

export interface FormSchema {
  ele: string // 表单项类型
  name: string // 数据 key名称
  label?: string // 表单 label
  placeholder?: string // 表单 placeholder
  rules?: any // 表单数据项校验规则
}

export type FormSchemas = FormSchema[]

export const formProps = () => ({
  m1: {
    type: Object as PropType<Record<string, any>>,
    required: true
  },
  schemas: {
    type: Array as PropType<FormSchemas>,
    default() {
      return []
    }
  }
})

export type FormProps = ExtractPropTypes<ReturnType<typeof formProps>>
