import { Modal } from './base/modal'
export * from './base/modal'

import { Drawer } from './base/drawer'
export * from './base/drawer'

// import { AppProvider, PageContent, AppLogo } from './app'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // MAppProvider: typeof AppProvider
    // MAppLogo: typeof AppLogo
    // MPageContent: typeof PageContent
    // MLogin: typeof Login
    // MException: typeof Exception
    XlBaseModal: typeof Modal
    XlBaseDrawer: typeof Drawer
  }
}
