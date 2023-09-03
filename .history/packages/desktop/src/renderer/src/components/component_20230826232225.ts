import { AppProvider, PageContent, AppLogo } from './app'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // MAppProvider: typeof AppProvider
    // MAppLogo: typeof AppLogo
    // MPageContent: typeof PageContent
    // MLogin: typeof Login
    // MException: typeof Exception
    // MModal: typeof Modal
    // MDrawer: typeof Drawer
  }
}
