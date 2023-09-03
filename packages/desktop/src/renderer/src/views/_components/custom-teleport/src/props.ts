import { ExtractPropTypes } from 'vue'

export const customTeleportProps = () => ({})
export type CustomTeleportProps = Partial<ExtractPropTypes<ReturnType<typeof customTeleportProps>>>
