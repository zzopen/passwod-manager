import { ExtractPropTypes } from 'vue'

export const createSecretCategoryProps = () => ({})

export type CreateSecretCategoryProps = Partial<
  ExtractPropTypes<ReturnType<typeof createSecretCategoryProps>>
>
