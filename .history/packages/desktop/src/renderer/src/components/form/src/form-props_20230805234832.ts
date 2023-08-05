import { ExtractPropTypes } from 'vue'

export const formProps = {} as const

export type FormProps = Partial<ExtractPropTypes<ReturnType<typeof drawerProps>>><typeof formProps>
