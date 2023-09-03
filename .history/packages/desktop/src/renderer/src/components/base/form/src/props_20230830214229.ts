import { ExtractPropTypes } from 'vue'

export interface FormItem {
  ele: string // 表单项类型
  name?: string // 数据 key名称
  label?: string // 表单 label
  placeholder?: string // 表单 placeholder
  rules?: any // 表单数据项校验规则
}

export const formProps = () => {}

export type FormProps = Partial<ExtractPropTypes<ReturnType<typeof formProps>>>
