import { ExtractPropTypes } from 'vue'

export const secretCategoryMenuProps = () => ({})

export type SecretCategoryMenuProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretCategoryMenuProps>>
>
