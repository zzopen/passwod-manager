import { Modal } from './base/modal'
export * from './base/modal'

import { Drawer } from './base/drawer'
export * from './base/drawer'

import { Copy } from './base/copy'
export * from './base/copy'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XlBaseModal: typeof Modal
    XlBaseDrawer: typeof Drawer
    XlBaseCopy: typeof Copy
  }
}
