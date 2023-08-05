import { ExtractPropTypes } from 'vue'

export const appLogoProps = {} as const

export type AppLogoProps = Partial<ExtractPropTypes<ReturnType<typeof drawerProps>>><typeof appLogoProps>
