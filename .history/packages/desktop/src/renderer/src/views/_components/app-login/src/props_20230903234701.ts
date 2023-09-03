import { ExtractPropTypes } from 'vue'

export const appLoginProps = () => ({})

export type LoginProps = Partial<ExtractPropTypes<ReturnType<typeof appLoginProps>>>
