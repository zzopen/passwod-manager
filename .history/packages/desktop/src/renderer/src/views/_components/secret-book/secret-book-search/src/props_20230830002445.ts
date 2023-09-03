import { ExtractPropTypes } from 'vue'

export const secretBookSearchProps = () => ({})
export type SecretBookSearchProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookSearchProps>>
>
