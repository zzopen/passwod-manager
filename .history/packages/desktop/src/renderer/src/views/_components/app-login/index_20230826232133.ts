import { withInstall } from '../shared/utils'
import login from './src/login.vue'
import './src/styles'

export const Login = withInstall(login)
export default Login
export * from './src/login-props'
