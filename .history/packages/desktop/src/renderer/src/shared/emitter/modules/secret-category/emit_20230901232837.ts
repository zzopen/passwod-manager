import { emitter } from '../../emitter'
import { SECRET_CATEGORY_EVENT_CLICK_MENU_ITEM } from './event'

// 点击分类menu-item事件
export function emitClickSecretCategoryMenuItem() {
  emitter.emit(SECRET_CATEGORY_EVENT_CLICK_MENU_ITEM)
}

export function listenerClickSecretCategoryMenuItem(fn: () => void) {
  emitter.on(SECRET_CATEGORY_EVENT_CLICK_MENU_ITEM, fn)
}

// 打开创建分类弹窗事件
export function emitOpenAddCategoryModal() {
  emitter.emit('openAddCategoryModal')
}

export function listenerOpenAddCategoryModal(callback: () => void) {
  emitter.on('openAddCategoryModal', callback)
}

// secret-book-detail-page
// export function emitRefreshSecretBookDetailPage() {
//   emitter.emit('refreshSecretBookDetailPage')
// }

// export function listenerRefreshSecretBookDetailPage(callback: () => void) {
//   emitter.on('refreshSecretBookDetailPage', callback)
// }
