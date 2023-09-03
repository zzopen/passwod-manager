import { ExtractPropTypes } from 'vue'

export const categoryMenuActionProps = () => ({})

export type CategoryMenuActionProps = Partial<
  ExtractPropTypes<ReturnType<typeof categoryMenuActionProps>>
>
