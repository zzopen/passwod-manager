import { Modal } from './base/modal'
export * from './base/modal'

import { Drawer } from './base/drawer'
export * from './base/drawer'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XlBaseModal: typeof Modal
    XlBaseDrawer: typeof Drawer
  }
}
