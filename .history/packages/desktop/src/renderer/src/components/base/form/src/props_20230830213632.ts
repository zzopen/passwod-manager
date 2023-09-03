import { ExtractPropTypes } from 'vue'

export interface FormItemOptions {}

export const formProps = () => {}

export type FormProps = Partial<ExtractPropTypes<ReturnType<typeof formProps>>>
