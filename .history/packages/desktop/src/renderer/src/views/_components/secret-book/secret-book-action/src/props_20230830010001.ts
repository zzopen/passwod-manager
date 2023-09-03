import { ExtractPropTypes } from 'vue'

export const secretBookActionProps = () => ({})
export type SecretBookActionProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookActionProps>>
>
