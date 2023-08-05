import { ExtractPropTypes } from 'vue'

export const exceptionProps = {} as const

export type ExceptionProps = Partial<ExtractPropTypes<ReturnType<typeof drawerProps>>><typeof exceptionProps>
