import { withInstall } from '../../shared/utils'
import appLogo from './src/index.vue'
import './src/app-logo.scss'

export const AppLogo = withInstall(appLogo)
export default AppLogo
export * from './src/app-logo-props'
