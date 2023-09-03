import { ExtractPropTypes } from 'vue'

export const secretCategoryListProps = () => ({})

export type SecretCategoryListProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretCategoryListProps>>
>
