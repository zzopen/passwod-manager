import { ExtractPropTypes } from 'vue'

export const emptyStateProps = () => ({})
export type EmptyStateProps = Partial<ExtractPropTypes<ReturnType<typeof emptyStateProps>>>
