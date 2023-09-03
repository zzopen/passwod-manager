import { type AppRouteRecordRaw } from '@renderer/types'

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

const CIPHER_ROUTE: Route = {
  name: 'Cipher',
  path: '/cipher'
}

const PAGE_NOT_FOUND_ROUTE: Route = {
  name: 'PageNotFound',
  childrenName: 'PageNotFoundChildren',
  path: '/:pathMatch(.*)*'
}

// const LOGIN_COMPONENT = () => import('@renderer/components/login')
const EXCEPTION_COMPONENT = () => import('@renderer/components/exception')

// const LoginRoute: AppRouteRecordRaw = {
//   name: LOGIN_ROUTE.name,
//   path: LOGIN_ROUTE.path,
//   component: LOGIN_COMPONENT,
//   meta: { title: '登录页面' }
// }

const PageNotFoundRoute: AppRouteRecordRaw = {
  path: PAGE_NOT_FOUND_ROUTE.path,
  name: PAGE_NOT_FOUND_ROUTE.name,
  component: EXCEPTION_COMPONENT,
  meta: {
    title: '404'
  }
}

const BUILT_IN_ROUTES: AppRouteRecordRaw[] = []

export {
  BUILT_IN_ROUTES,
  PageNotFoundRoute,
  ROOT_ROUTE,
  HOME_ROUTE,
  CIPHER_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  EXCEPTION_COMPONENT
}

export type { AppRouteRecordRaw, Route }

// import { BUILT_IN_ROUTES, ROOT_ROUTE, CIPHER_ROUTE } from '@renderer/routers'
