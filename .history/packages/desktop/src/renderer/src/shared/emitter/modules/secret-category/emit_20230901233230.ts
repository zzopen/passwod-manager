import { emitter } from '../../emitter'
import { EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM } from './event'

// 点击分类menu-item事件
export function emitClickSecretCategoryMenuItem() {
  emitter.emit(EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM)
}

export function listenerClickSecretCategoryMenuItem(fn: () => void) {
  emitter.on(EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM, fn)
}

// 打开创建分类弹窗事件
export function emitOpenAddCategoryModal() {
  emitter.emit(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL)
}

export function listenerOpenAddCategoryModal(callback: () => void) {
  emitter.on(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL, callback)
}

// secret-book-detail-page
// export function emitRefreshSecretBookDetailPage() {
//   emitter.emit('refreshSecretBookDetailPage')
// }

// export function listenerRefreshSecretBookDetailPage(callback: () => void) {
//   emitter.on('refreshSecretBookDetailPage', callback)
// }
