import { withInstall } from '../shared/utils'
import drawer from './src/index.vue'
import './src/drawer.scss'

export const Drawer = withInstall(drawer)
export default Drawer
export * from './src/drawer-props'
