const drawerProps = () => ({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  placement: {
    type: ['left', 'right', 'top', 'bottom'],
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    },
    default: 'right'
  }
})
type DrawerProps = VueExtractFnPropsType<typeof drawerProps>

export { type DrawerProps, drawerProps }
