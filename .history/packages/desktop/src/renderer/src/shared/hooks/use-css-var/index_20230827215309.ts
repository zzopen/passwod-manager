export interface GlobalCssVar {
  layoutSiderWidth: string
}

const globalCssVar: GlobalCssVar = {
  layoutSiderWidth: '210px'
}

export function useCssVar() {
  const defaultCssVar = { ...globalCssVar }
  return defaultCssVar
}
