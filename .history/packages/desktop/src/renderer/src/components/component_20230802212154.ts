import { AppProvider, PageContent, AppLogo } from './app'
export * from './app'

import { LayoutContent, LayoutLeft } from './layout'
export * from './layout'

import { Login } from './login'
export * from './login'

import { Exception } from './exception'
export * from './exception'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MAppProvider: typeof AppProvider
    MAppLogo: typeof AppLogo
    MPageContent: typeof PageContent
    MLogin: typeof Login
    MException: typeof Exception
    MLayoutContent: typeof LayoutContent
    MLayoutLeft: typeof LayoutLeft
  }
}
