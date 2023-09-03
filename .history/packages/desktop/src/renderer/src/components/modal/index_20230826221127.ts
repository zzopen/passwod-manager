import { withInstall } from '../shared/utils'
import modal from './src/modal.vue'
import './src/modal.scss'

export const Modal = withInstall(modal)
export default Modal
export * from './src/modal-props'
