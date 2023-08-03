import { camelize } from './format'
import { globalCls } from '@/styles/business/module'

export function createFullComponentName(name: string) {
  return camelize(`${globalCls.namespace.toUpperCase()}-${name}`)
}
