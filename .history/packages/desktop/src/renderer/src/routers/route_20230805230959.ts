import { type RouteRecordRaw } from 'vue-router'

type AppRouteRecordRaw = RouteRecordRaw

interface Route {
  name: string
  path: string
  childrenName?: string
}

const ROOT_ROUTE: Route = {
  name: 'Root',
  path: '/'
}

const LOGIN_ROUTE: Route = {
  name: 'Login',
  path: '/login'
}

const HOME_ROUTE: Route = {
  name: 'Home',
  path: '/home'
}

const PAGE_NOT_FOUND_ROUTE: Route = {
  name: 'PageNotFound',
  childrenName: 'PageNotFoundChildren',
  path: '/:pathMatch(.*)*'
}

const LOGIN_COMPONENT = () => import('@renderer/components123/login')
const EXCEPTION_COMPONENT = () => import('@renderer/components123/exception')
const LAYOUT_COMPONENT = () => import('@renderer/business/views/layout')

const LoginRoute: AppRouteRecordRaw = {
  name: LOGIN_ROUTE.name,
  path: LOGIN_ROUTE.path,
  component: LOGIN_COMPONENT,
  meta: { title: '登录页面' }
}

const PageNotFoundRoute: AppRouteRecordRaw = {
  path: PAGE_NOT_FOUND_ROUTE.path,
  name: PAGE_NOT_FOUND_ROUTE.name,
  component: EXCEPTION_COMPONENT,
  meta: {
    title: '404'
  }
}

const BUILT_IN_ROUTES: AppRouteRecordRaw[] = [LoginRoute, PageNotFoundRoute]

export {
  BUILT_IN_ROUTES,
  LoginRoute,
  PageNotFoundRoute,
  ROOT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  LOGIN_COMPONENT,
  EXCEPTION_COMPONENT,
  LAYOUT_COMPONENT
}

export type { AppRouteRecordRaw, Route }
