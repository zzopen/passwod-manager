import { ExtractPropTypes } from 'vue'

export interface SecretBookDetail {
  website: string
  account: string
  password: string
  email: string
  mobile: string
}

export const defaultAccountInfo: AccountInfo = {
  website: '',
  account: '',
  password: '',
  email: '',
  mobile: ''
}

export const secretBookDetailProps = () => ({
  title: { type: String, default: '' }
})
export type SecretBookDetailProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookDetailProps>>
>
