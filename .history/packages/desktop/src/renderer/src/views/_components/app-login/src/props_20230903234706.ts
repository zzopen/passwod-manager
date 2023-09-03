import { ExtractPropTypes } from 'vue'

export const appLoginProps = () => ({})

export type AppLoginProps = Partial<ExtractPropTypes<ReturnType<typeof appLoginProps>>>
