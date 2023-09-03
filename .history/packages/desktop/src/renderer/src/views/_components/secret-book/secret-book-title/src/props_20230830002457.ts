import { ExtractPropTypes } from 'vue'

export const secretBookTitleProps = () => ({})
export type SecretBookTitleProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookTitleProps>>
>
