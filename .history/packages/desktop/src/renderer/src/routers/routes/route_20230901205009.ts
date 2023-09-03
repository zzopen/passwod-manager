import type { AppRouteRecordRaw, Route } from '@renderer/types'

/**** Component ****/
// const LOGIN_COMPONENT = () => import('@renderer/components/login')
export const EXCEPTION_COMPONENT = () => import('@renderer/components/exception')

export const ROOT_ROUTE: Route = {
  name: 'Root',
  path: '/'
}

// export  const LOGIN_ROUTE: Route = {
//   name: 'Login',
//   path: '/login'
// }

// export  const LoginRoute: AppRouteRecordRaw = {
//   name: LOGIN_ROUTE.name,
//   path: LOGIN_ROUTE.path,
//   component: LOGIN_COMPONENT,
//   meta: { title: '登录页面' }
// }

export const PAGE_NOT_FOUND_ROUTE: Route = {
  name: 'PageNotFound',
  childrenName: 'PageNotFoundChildren',
  path: '/:pathMatch(.*)*'
}

export const PageNotFoundRoute: AppRouteRecordRaw = {
  path: PAGE_NOT_FOUND_ROUTE.path,
  name: PAGE_NOT_FOUND_ROUTE.name,
  component: EXCEPTION_COMPONENT,
  meta: {
    title: '404'
  }
}

export const HOME_ROUTE: Route = {
  name: 'Home',
  path: '/home'
}

export const CIPHER_ROUTE: Route = {
  name: 'Cipher',
  path: '/cipher'
}

export const BUILT_IN_ROUTES: AppRouteRecordRaw[] = []
