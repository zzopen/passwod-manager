import { withInstall } from '../../components/shared/utils'
import login from './src/index.vue'
import './src/styles'

export const Login = withInstall(login)
export default Login
export * from './src/login-props'
