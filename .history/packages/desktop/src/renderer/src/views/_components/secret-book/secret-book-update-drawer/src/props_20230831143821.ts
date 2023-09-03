import { ExtractPropTypes } from 'vue'

export const secretBookUpdateDrawerProps = () => ({})

export type UpdateAccountDrawerProps = Partial<
  ExtractPropTypes<ReturnType<typeof updateAccountDrawerProps>>
>
