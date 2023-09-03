import { ExtractPropTypes } from 'vue'

export interface FormSchema {
  ele: string // 表单项类型
  name: string // 数据 key名称
  label?: string // 表单 label
  placeholder?: string // 表单 placeholder
  rule?: Record<string, any>[] // 表单数据项校验规则
  labelCol?: any
  labelAlign: 
}

export type FormSchemas = FormSchema[]

export const formProps = () => ({
  model: {
    type: Object as any,
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
