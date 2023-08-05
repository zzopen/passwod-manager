import type { DrawerProps as AntDrawerProps } from 'ant-design-vue'

type Placement = Pick<AntDrawerProps, 'placement'>

const drawerProps = () => ({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  placement: { type: Object as PropType<a>, default: 'right' }
})

type DrawerProps = VueExtractFnPropsType<typeof drawerProps>

export { type DrawerProps, drawerProps }
