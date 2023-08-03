export interface GlobalCls {
  namespace: string
  // css class name
  nsLayout: string
  layoutContent: string
  layoutHeader: string
  layoutFooter: string
  layoutSider: string
  layoutSiderSider: string
  appLogo: string
  // css variables
  layoutLeftWidth: string
  bLayoutCenterWidth: string
}

export const globalCls: GlobalCls
export default globalCls
