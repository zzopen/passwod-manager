import { ExtractPropTypes } from 'vue'

export const appProviderProps = {} as const

export type AppProviderProps = Partial<ExtractPropTypes<ReturnType<typeof drawerProps>>><typeof appProviderProps>
