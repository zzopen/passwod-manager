import { withInstall } from '../shared/utils'
import login from './src/index.vue'
import './styles'

export const Login = withInstall(login)
export default Login
export * from './src/login-props'
