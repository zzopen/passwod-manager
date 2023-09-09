import { ExtractPropTypes } from 'vue'

export const createSecretBookDrawerProps = () => ({})

export type CreateSecretBookDrawerProps = Partial<
  ExtractPropTypes<ReturnType<typeof createSecretBookDrawerProps>>
>
