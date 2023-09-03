import { ExtractPropTypes } from 'vue'

export interface FormItem {}

export const formProps = () => {}

export type FormProps = Partial<ExtractPropTypes<ReturnType<typeof formProps>>>
