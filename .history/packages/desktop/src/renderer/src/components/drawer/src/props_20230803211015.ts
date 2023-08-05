import type { placementType } from 'ant-design-vue'

const drawerProps = () => ({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  placement: { type: String as PropType<placementType>, default: 'right' }
})

type DrawerProps = VueExtractFnPropsType<typeof drawerProps>

export { type DrawerProps, drawerProps }
