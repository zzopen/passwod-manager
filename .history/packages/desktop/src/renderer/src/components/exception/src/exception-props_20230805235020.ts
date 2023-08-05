import { ExtractPropTypes } from 'vue'

export const exceptionProps = () => {}

export type ExceptionProps = Partial<ExtractPropTypes<ReturnType<typeof exceptionProps>>>
