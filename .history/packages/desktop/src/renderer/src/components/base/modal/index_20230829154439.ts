import { withInstall } from '@renderer/components/_shared'
import modal from './src/modal.vue'
import './src/modal.scss'

export const Modal = withInstall(modal)
export default Modal
export * from './src/props'
