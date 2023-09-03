import { ExtractPropTypes } from 'vue'

export const emptyStateProps = () => ({})
export type SecretBookActionProps = Partial<ExtractPropTypes<ReturnType<typeof emptyStateProps>>>
