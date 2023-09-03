import { ExtractPropTypes } from 'vue'

export const addCategoryProps = () => ({})

export type AddCategoryProps = Partial<ExtractPropTypes<ReturnType<typeof addCategoryProps>>>
