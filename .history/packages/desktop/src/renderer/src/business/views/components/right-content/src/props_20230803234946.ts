interface AccountData {
  website: string
  account: string
  password: string
  email: string
  mobile: string
}

const rightContentProps = () => ({})
type RightContentProps = VueExtractFnPropsType<typeof rightContentProps>

export { type RightContentProps, type AccountData, rightContentProps }
