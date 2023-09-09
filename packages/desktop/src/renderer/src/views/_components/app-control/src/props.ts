import { ExtractPropTypes } from 'vue'

export const appControlProps = () => ({})

export type AppControlProps = Partial<ExtractPropTypes<ReturnType<typeof appControlProps>>>

