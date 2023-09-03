export interface GlobalCssVar {
  layoutLeftWidth: string
  layoutLeftColor: string
}

const globalCssVar: GlobalCssVar = {
  layoutLeftWidth: '210px',
  layoutLeftColor: '#ffffff'
}

export function useCssVar() {
  const defaultCssVar = { ...globalCssVar }
  return defaultCssVar
}
