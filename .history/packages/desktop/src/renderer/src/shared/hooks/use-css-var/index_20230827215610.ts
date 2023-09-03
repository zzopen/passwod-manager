export interface GlobalCssVar {
  layoutLeftWidth: string
  layoutLeftColor: string
  layoutLeftBgColor: string
}

const globalCssVar: GlobalCssVar = {
  layoutLeftWidth: '210px',
  layoutLeftColor: '#ffffff',
  layoutLeftBgColor: ''
}

export function useCssVar() {
  const defaultCssVar = { ...globalCssVar }
  return defaultCssVar
}
