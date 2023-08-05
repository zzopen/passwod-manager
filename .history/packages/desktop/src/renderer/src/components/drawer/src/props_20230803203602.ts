const drawerProps = () => ({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  placement: { type: String, default: 'right' }
})
type DrawerProps = VueExtractFnPropsType<typeof drawerProps>

export { type DrawerProps, drawerProps }
