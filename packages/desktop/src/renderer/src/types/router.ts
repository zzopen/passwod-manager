import type { RouteRecordRaw } from '@renderer/shared'

export interface Route {
  name: string
  path: string
  childrenName?: string
}

export type AppRouteRecordRaw = RouteRecordRaw
