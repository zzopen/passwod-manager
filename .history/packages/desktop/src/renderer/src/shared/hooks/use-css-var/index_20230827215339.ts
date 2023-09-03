export interface GlobalCssVar {
  layoutLeftWidth: string
}

const globalCssVar: GlobalCssVar = {
  layoutLeftWidth: '210px'
}

export function useCssVar() {
  const defaultCssVar = { ...globalCssVar }
  return defaultCssVar
}
