import { withInstall } from '../shared/utils'
import exception from './src/exception.vue'
import './src/exception.scss'

export const Exception = withInstall(exception)
export default Exception
export * from './src/exception-props'
