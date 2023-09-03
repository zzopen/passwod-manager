import { ExtractPropTypes } from 'vue'

export interface FormSchema {
  ele: string // 表单项类型
  name?: string // 数据 key名称
  label?: string // 表单 label
  placeholder?: string // 表单 placeholder
  rules?: any // 表单数据项校验规则
}

export type FormItems = FormItem[]

export const formProps = () => ({
  model: {
    type: Object as PropType<Record<string, any>>,
    required: true
  },
  schemas: {
    type: Object as PropType<FormSchema>,
    default() {
      return []
    }
  }
})

export type FormProps = Partial<ExtractPropTypes<ReturnType<typeof formProps>>>
