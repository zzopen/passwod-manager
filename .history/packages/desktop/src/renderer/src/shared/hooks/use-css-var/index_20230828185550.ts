export interface GlobalCssVar {
  layoutLeftWidth: string
  layoutLeftColor: string
  layoutLeftBgColor: string
  cipherPageLeftWidth: string
  cipherPageLeftBgColor: string
}

const globalCssVar: GlobalCssVar = {
  // layout-left
  layoutLeftWidth: '210px',
  layoutLeftColor: '#ffffff',
  layoutLeftBgColor: '#3f4361',
  // cipher-page-left
  cipherPageLeftWidth: '210px',
  cipherPageLeftBgColor: '#3f4361'
}

export function useCssVar() {
  const defaultCssVar = { ...globalCssVar }
  return defaultCssVar
}
