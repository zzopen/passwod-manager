import { ExtractPropTypes } from 'vue'

export const categoryListProps = () => ({})

export type CategoryListProps = Partial<ExtractPropTypes<ReturnType<typeof categoryListProps>>>
