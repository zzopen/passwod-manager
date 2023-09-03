export interface GlobalCssVar {
  layoutLeftWidth: string
  layoutLeftColor: string
  layoutLeftBgColor: string
  cipherLeftWidth: string
  cipherLeftBgColor: string
}

const globalCssVar: GlobalCssVar = {
  // layout-left
  layoutLeftWidth: '210px',
  layoutLeftColor: '#ffffff',
  layoutLeftBgColor: '#3f4361',
  // cipher-page-left
  cipherLeftWidth: '270px',
  cipherLeftBgColor: 'red'
}

export function useCssVar() {
  const defaultCssVar = { ...globalCssVar }
  return defaultCssVar
}
