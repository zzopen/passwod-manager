export interface GlobalCssVar {
  layoutLeftWidth: string
  layoutLeftColor: string
  layoutLeftBgColor: string
  cipherLeftWidth: string
  cipherLeftBgColor: string
  appLogoHeight: string
  appLogoImgWidth: string
  appLogoImgHeight: string
}

const globalCssVar: GlobalCssVar = {
  // layout-left
  layoutLeftWidth: '210px',
  layoutLeftColor: '#ffffff',
  layoutLeftBgColor: '#3f4361',
  // cipher-left
  cipherLeftWidth: '270px',
  cipherLeftBgColor: '#fffff',
  // app-logo
  appLogoHeight: '40px',
  appLogoImgWidth: '32px',
  appLogoImgHeight: '32px'
}

export function useCssVar() {
  const defaultCssVar = { ...globalCssVar }
  return defaultCssVar
}
