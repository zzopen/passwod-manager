import type { RouteRecordRaw } from '@renderer/shared/deps'

export interface Route {
  name: string
  path: string
  childrenName?: string
}

export type AppRouteRecordRaw = RouteRecordRaw
