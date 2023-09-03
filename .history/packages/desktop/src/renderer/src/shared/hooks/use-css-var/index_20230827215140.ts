export interface GlobalCssVar {
  layoutSiderWidth: string
}

const globalCssVar: GlobalCssVar = {
  layoutSiderWidth: '40px'
}

export function useCssVar() {
  return { ...globalCssVar }
}
