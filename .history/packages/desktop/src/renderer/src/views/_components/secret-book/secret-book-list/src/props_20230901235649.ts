import { ExtractPropTypes } from 'vue'

export interface SecretBookListItem {}

export const secretBookListProps = () => ({})
export type SecretBookListProps = Partial<ExtractPropTypes<ReturnType<typeof secretBookListProps>>>
