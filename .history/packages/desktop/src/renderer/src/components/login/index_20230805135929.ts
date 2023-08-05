import { withInstall } from '../shared/utils'
import login from './src/index.vue'

export const Login = withInstall(login)
export default Login
export * from './src/login-props'
