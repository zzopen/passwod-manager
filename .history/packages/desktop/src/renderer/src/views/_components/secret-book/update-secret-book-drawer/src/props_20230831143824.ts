import { ExtractPropTypes } from 'vue'

export const secretBookUpdateDrawerProps = () => ({})

export type SecretBookUpdateDrawerProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookUpdateDrawerProps>>
>
