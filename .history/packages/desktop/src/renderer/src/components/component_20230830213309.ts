import { Modal } from './base/modal'
export * from './base/modal'

import { Drawer } from './base/drawer'
export * from './base/drawer'

import { Form } from './base/form'
export * from './base/form'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XlBaseModal: typeof Modal
    XlBaseDrawer: typeof Drawer
    XlBaseForm: typeof Form
  }
}
