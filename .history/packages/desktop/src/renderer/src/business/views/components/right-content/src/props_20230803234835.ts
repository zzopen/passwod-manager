interface AccountInfo {
  website: string
}

const rightContentProps = () => ({})
type RightContentProps = VueExtractFnPropsType<typeof rightContentProps>

export { type RightContentProps, rightContentProps }
