import { emitter } from '../../emitter'
import {
  EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM,
  EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL,
  EVENT_REFRESH_SECRET_CATEGORY_MENU_LIST
} from './event'

// 点击分类menu-item事件
export function emitClickSecretCategoryMenuItem(p: { secret_category_id: string }) {
  emitter.emit(EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM, p)
}

export function listenerClickSecretCategoryMenuItem(
  fn: (p: { secret_category_id: string }) => void
) {
  emitter.on(EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM, fn)
}

// 打开创建分类弹窗事件
export function emitOpenCreateSecretCategoryModal() {
  emitter.emit(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL)
}

export function listenerOpenCreateSecretCategoryModal(fn: () => void) {
  emitter.on(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL, fn)
}

// 刷新分类菜单
export function emitRefreshSecretCategoryMenuList() {
  emitter.emit(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL)
}

export function listenerOpenCreateSecretCategoryModal(fn: () => void) {
  emitter.on(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL, fn)
}
