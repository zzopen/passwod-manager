export type UseNamespace = {
  ns: string
  b: () => string
  e: (el: string) => string
  m: (mo: string) => string
  em: (el: string, mo: string) => string
}

function createBem(namespace: string, element?: string, modifier?: string): string {
  let cls = namespace
  if (element) {
    cls += `__${element}`
  }

  if (modifier) {
    cls += `--${modifier}`
  }

  return cls
}

/**
 * useNamespace
 * @param block current block name
 * @param needDot Do you need a dot prefix (defalut: false)
 * @returns UseNamespace
 */
export function useNamespace(block: string): UseNamespace {
  const ns = 'zz'
  const namespace = `${ns}-${block}` // 业务上用的命名空间
  const b = () => createBem(namespace)
  const e = (element: string) => (element ? createBem(namespace, element) : '')
  const m = (modifier: string) => (modifier ? createBem(namespace, '', modifier) : '')
  const em = (element: string, modifier: string) =>
    element && modifier ? createBem(namespace, element, modifier) : ''
  return {
    ns: namespace,
    b,
    e,
    m,
    em
  }
}
