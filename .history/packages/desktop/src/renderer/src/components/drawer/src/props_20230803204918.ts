import type { DrawerProps as AntDrawerProps } from 'ant-design-vue'

const drawerProps = () => ({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  placement: { type: Object as PropType<Pick<AntDrawerProps, 'placement'>>, default: 'right' }
})

type DrawerProps = VueExtractFnPropsType<typeof drawerProps>

export { type DrawerProps, drawerProps }
