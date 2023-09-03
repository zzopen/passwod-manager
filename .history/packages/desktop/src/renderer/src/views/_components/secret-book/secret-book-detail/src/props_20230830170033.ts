import { ExtractPropTypes } from 'vue'

interface AccountInfo {
  website: string
  account: string
  password: string
  email: string
  mobile: string
}

const defaultAccountInfo: AccountInfo = {
  website: '',
  account: '',
  password: '',
  email: '',
  mobile: ''
}
const secretBookDetailProps = () => ({})

export { type RightContentProps, type AccountInfo, rightContentProps, defaultAccountInfo }

export const secretBookListProps = () => ({})
export type SecretBookDetailProps = Partial<
  ExtractPropTypes<ReturnType<typeof secretBookDetailProps>>
>
