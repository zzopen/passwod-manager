import { ExtractPropTypes } from 'vue'

export const updateAccountDrawerProps = () => ({})

export type UpdateAccountDrawerProps = Partial<
  ExtractPropTypes<ReturnType<typeof updateAccountDrawerProps>>
>
