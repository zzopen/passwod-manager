import { ExtractPropTypes } from 'vue'

export interface AccountInfo {
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
const secretBookDetailProps = () => ({})

export const secretBookListProps = () => ({})
export type SecretBookDetailProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookDetailProps>>
>
