import { ExtractPropTypes } from 'vue'

export interface SecretBookListItem {
  id: string
  title: string
}

export interface SecretBookList = SecretBookListItem[]

export const secretBookListProps = () => ({})
export type SecretBookListProps = Partial<ExtractPropTypes<ReturnType<typeof secretBookListProps>>>
