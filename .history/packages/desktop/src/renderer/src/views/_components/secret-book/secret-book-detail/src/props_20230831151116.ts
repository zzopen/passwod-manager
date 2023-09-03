import { ExtractPropTypes } from 'vue'

export interface DataSource {
  title: string
  website: string
  username: string
  password: string
  remrk: string
  mobile: string
  email: string
}

export const defaultDataSource: DataSource = {
  title: '',
  website: '',
  username: '',
  password: ''
}

export const secretBookDetailProps = () => ({
  title: { type: String, required: false, default: '' },
  website: { type: String, required: false, default: '' },
  username: { type: String, required: false, default: '' },
  password: { type: String, required: false, default: '' },
  remrk: { type: String, required: false, default: '' },
  mobile: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' }
})

export type SecretBookDetailProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookDetailProps>>
>
