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
const rightContentProps = () => ({})
type RightContentProps = VueExtractFnPropsType<typeof rightContentProps>

export { type RightContentProps, type AccountInfo, rightContentProps }
