import type { DrawerProps } from 'ant-design-vue'
const drawerProps = () => ({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  placement: {
    validator(value) {
      return ['left', 'right', 'top', 'bottom'].includes(value)
    },
    default: 'right'
  }
})
type DrawerProps = VueExtractFnPropsType<typeof drawerProps>

export { type DrawerProps, drawerProps }
