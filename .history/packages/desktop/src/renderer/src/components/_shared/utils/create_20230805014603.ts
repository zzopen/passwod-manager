import { camelize } from './format'
import { globalCls } from '@renderer/styles/module'

export function createFullComponentName(name: string) {
  return camelize(`${globalCls.namespace.toUpperCase()}-${name}`)
}
