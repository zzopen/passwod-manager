import { ExtractPropTypes } from 'vue'

export interface DataSource {
  title: string
  website: string
  username: string
  password: string
  remark: string
  mobile: string
  email: string
}

export const defaultDataSource: DataSource = {
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
