import { ExtractPropTypes } from 'vue'

export interface FormInputSchema {
  placeholder?: string // 表单 placeholder
  rule?: Record<string, any>[] // 表单数据项校验规则
  labelCol?: any
  labelAlign?: 'left' | 'right'
}

export const inputProps = () => {
  return {
    value: {
      type: String,
      required: true
    },
    schema: {}
    // placement: { type: String as PropType<'left' | 'right' | 'top' | 'bottom'>, default: 'right' }
  }
}

export type InputProps = Partial<ExtractPropTypes<ReturnType<typeof inputProps>>>
