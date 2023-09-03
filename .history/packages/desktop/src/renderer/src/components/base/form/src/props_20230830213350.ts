import { ExtractPropTypes } from 'vue'

export interface FormConfig {}

export const formProps = () => {}

export type FormProps = Partial<ExtractPropTypes<ReturnType<typeof formProps>>>
