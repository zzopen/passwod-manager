import { ExtractPropTypes } from 'vue'

export const appAboutProps = () => ({})

export type AppAboutProps = Partial<ExtractPropTypes<ReturnType<typeof appAboutProps>>>

