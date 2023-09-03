import { ExtractPropTypes } from 'vue'

export interface DataSource {
  id: string
  title: string
  website: string
  username: string
  password: string
  remark: string
  mobile: string
  email: string
}

export const defaultDataSource: DataSource = {
  id: '',
  title: '',
  website: '',
  username: '',
  password: '',
  remark: '',
  email: '',
  mobile: ''
}

export const secretBookDetailProps = () => ({})

export type SecretBookDetailProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookDetailProps>>
>
