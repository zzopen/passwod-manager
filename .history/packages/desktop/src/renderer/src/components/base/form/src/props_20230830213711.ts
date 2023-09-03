import { ExtractPropTypes } from 'vue'

export interface FormItem {
  ele: string
}

export const formProps = () => {}

export type FormProps = Partial<ExtractPropTypes<ReturnType<typeof formProps>>>
