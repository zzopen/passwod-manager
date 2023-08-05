import { withInstall } from '../../shared/utils'
import appProvider from './src/index.vue'
import './src/app-provider.scss'

export const AppProvider = withInstall(appProvider)
export default AppProvider
export * from './src/app-provider-props'
