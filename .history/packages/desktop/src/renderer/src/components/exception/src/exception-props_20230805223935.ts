import { ExtractPropTypes } from 'vue'

export const exceptionProps = {} as const

export type ExceptionProps = ExtractPropTypes<typeof exceptionProps>
