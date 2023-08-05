const drawerProps = () => ({
  open: { type: Boolean, default: false },
  with: { type: [String, Number], default: 378 },
  title: { type: String, default: '' },
  placement: { type: String as PropType<'left' | 'right' | 'top' | 'bottom'>, default: 'right' }
})

type DrawerProps = VueExtractFnPropsType<typeof drawerProps>

export { type DrawerProps, drawerProps }
