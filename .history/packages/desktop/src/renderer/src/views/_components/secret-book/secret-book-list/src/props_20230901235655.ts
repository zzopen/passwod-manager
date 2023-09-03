import { ExtractPropTypes } from 'vue'

export interface SecretBookListItem {
  title: string
}

export const secretBookListProps = () => ({})
export type SecretBookListProps = Partial<ExtractPropTypes<ReturnType<typeof secretBookListProps>>>
