export interface GlobalCssVar {
  layoutLeftWidth: string
  layoutLeftColor: string
  layoutLeftBgColor: string
  cipherLeftWidth: string
  cipherLeftBgColor: string
  appLogoHeight: string
  appLogoImgWidth: string
  appLogoImgHeight: string
  appLayoutHeaderHeight: string
  appLayoutHeaderBgColor: string
}

const globalCssVar: GlobalCssVar = {
  // layout-left
  layoutLeftWidth: '210px',
  layoutLeftColor: '#ffffff',
  layoutLeftBgColor: '#3f4361',
  // cipher-left
  cipherLeftWidth: '270px',
  cipherLeftBgColor: '#f1f3f4',
  // app-logo
  appLogoHeight: '40px',
  appLogoImgWidth: '32px',
  appLogoImgHeight: '32px',
  appLayoutHeaderHeight: '32px',
  appLayoutHeaderBgColor: '#ffffff'
}

export function useCssVar() {
  const defaultCssVar = { ...globalCssVar }
  return defaultCssVar
}
