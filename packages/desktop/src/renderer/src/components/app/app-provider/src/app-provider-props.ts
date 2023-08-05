import { ExtractPropTypes } from 'vue'

export const appProviderProps = () => {}

export type AppProviderProps = Partial<ExtractPropTypes<ReturnType<typeof appProviderProps>>>
