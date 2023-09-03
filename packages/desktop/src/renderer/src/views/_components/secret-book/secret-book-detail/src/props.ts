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
  secretCategoryId: string
  secretCategoryName: string
}

export const defaultDataSource: DataSource = {
  id: '',
  title: '',
  website: '',
  username: '',
  password: '',
  remark: '',
  email: '',
  mobile: '',
  secretCategoryId: '',
  secretCategoryName: ''
}

export const secretBookDetailProps = () => ({})

export type SecretBookDetailProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookDetailProps>>
>
