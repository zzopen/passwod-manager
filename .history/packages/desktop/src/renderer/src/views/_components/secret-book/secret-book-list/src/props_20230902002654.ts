import { ExtractPropTypes } from 'vue'

export interface DataSourceItem {
  id: string
  title: string
}

export type DataSources = DataSourceItem[]

export const secretBookListProps = () => ({})
export type SecretBookListProps = Partial<ExtractPropTypes<ReturnType<typeof secretBookListProps>>>
