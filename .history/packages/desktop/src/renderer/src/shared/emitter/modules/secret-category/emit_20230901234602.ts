import { emitter } from '../../emitter'
import {
  EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM,
  EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL
} from './event'

// 点击分类menu-item事件
export function emitClickSecretCategoryMenuItem() {
  emitter.emit(EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM)
}

export function listenerClickSecretCategoryMenuItem(fn: () => void) {
  emitter.on(EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM, fn)
}

// 打开创建分类弹窗事件
export function emitOpenCreateSecretCategoryModal(secret_category_id: string) {
  emitter.emit(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL)
}

export function listenerOpenCreateSecretCategoryModal(fn: () => void) {
  emitter.on(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL, fn)
}
