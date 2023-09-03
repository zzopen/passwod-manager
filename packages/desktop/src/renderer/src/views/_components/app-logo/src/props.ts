import { ExtractPropTypes } from 'vue'

export const appLogoProps = () => {}

export type AppLogoProps = Partial<ExtractPropTypes<ReturnType<typeof appLogoProps>>>
