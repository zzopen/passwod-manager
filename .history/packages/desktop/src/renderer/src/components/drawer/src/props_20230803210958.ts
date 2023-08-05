import type { DrawerProps } from 'ant-design-vue'

const drawerProps = () => ({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  placement: { type: String as PropType<PlacementTypes>, default: 'right' }
})

type DrawerProps = VueExtractFnPropsType<typeof drawerProps>

export { type DrawerProps, drawerProps }
