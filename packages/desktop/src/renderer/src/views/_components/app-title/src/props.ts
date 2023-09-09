import { ExtractPropTypes } from 'vue'

export const appTitleProps = () => {}

export type AppTitleProps = Partial<ExtractPropTypes<ReturnType<typeof appTitleProps>>>
