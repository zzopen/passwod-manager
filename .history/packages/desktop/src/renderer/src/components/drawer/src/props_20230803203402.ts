const drawerProps = () => ({
  open: { type: Boolean, default: false }
})
type DrawerProps = VueExtractFnPropsType<typeof drawerProps>

export { type DrawerProps, drawerProps }
