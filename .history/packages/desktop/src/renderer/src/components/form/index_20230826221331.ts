import { withInstall } from '../shared/utils'
import form from './src/form.vue'
import './src/form.scss'

export const Form = withInstall(form)
export default Form
export * from './src/form-props'
