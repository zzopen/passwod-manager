// import { ElectronStore } from '@main/shared/deps'

// interface LocalStorageUserInfo {
//   token: string
// }

// const defaultLocalStorageUserInfo = (): LocalStorageUserInfo => {
//   return {
//     token: ''
//   }
// }

// const store = new ElectronStore()

// const setUserInfo = (p: LocalStorageUserInfo) => {
//   store.set('user_info', JSON.stringify(p))
// }

// const getUserInfo = (): LocalStorageUserInfo => {
//   const userInfo = store.get('user_info') as string
//   if (!userInfo) {
//     return defaultLocalStorageUserInfo()
//   }

//   return JSON.parse(userInfo)
// }

// const getToken = (): string => {
//   const userInfo = getUserInfo()
//   return userInfo.token
// }

// const setToken = (token: string) => {
//   const userInfo = getUserInfo()
//   userInfo.token = token
//   setUserInfo(userInfo)
// }

// export { setUserInfo, getUserInfo, getToken, setToken }
// export type { LocalStorageUserInfo }
export {}
