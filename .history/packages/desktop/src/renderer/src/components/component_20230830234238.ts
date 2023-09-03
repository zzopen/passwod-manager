import { Modal } from './base/modal'
export * from './base/modal'

import { Drawer } from './base/drawer'
export * from './base/drawer'

import { Form } from './base/form'
export * from './base/form'

import { Input } from './base/input'
export * from './base/input'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XlBaseModal: typeof Modal
    XlBaseDrawer: typeof Drawer
    XlBaseForm: typeof Form
  }
}
