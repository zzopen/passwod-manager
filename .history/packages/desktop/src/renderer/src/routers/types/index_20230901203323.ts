import { type RouteRecordRaw } from 'vue-router'

export interface Route {
  name: string
  path: string
  childrenName?: string
}

export type AppRouteRecordRaw = RouteRecordRaw
