import { emitter } from '../emitter'
import {
  EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM,
  EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL,
  EVENT_LOAD_SECRET_CATEGORY_MENU_LIST,
  EVENT_OPEN_SECRET_CATEGORY_MENU_CONTEXTMENU,
  EVENT_OPEN_UPDATE_SECRET_CATEGORY_MODAL
} from './event'

// 点击分类menu-item事件
export const emitClickSecretCategoryMenuItem = (p: { secret_category_id: string }) => {
  emitter.emit(EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM, p)
}

export const listenerClickSecretCategoryMenuItem = (
  fn: (p: { secret_category_id: string }) => void
) => {
  emitter.on(EVENT_CLICK_SECRET_CATEGORY_MENU_ITEM, fn)
}

// 打开创建分类弹窗事件
export const emitOpenCreateSecretCategoryModal = () => {
  emitter.emit(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL)
}

export const listenerOpenCreateSecretCategoryModal = (fn: () => void) => {
  emitter.on(EVENT_OPEN_CREATE_SECRET_CATEGORY_MODAL, fn)
}

// 刷新分类菜单
export const emitLoadSecretCategoryMenuList = () => {
  emitter.emit(EVENT_LOAD_SECRET_CATEGORY_MENU_LIST)
}

export const listenerLoadSecretCategoryMenuList = (fn: () => void) => {
  emitter.on(EVENT_LOAD_SECRET_CATEGORY_MENU_LIST, fn)
}

// 刷新分类菜单
export const emitOpenSecretCategoryMenuContextmenu = (p: {
  secret_category_id: string
  secret_category_name: string
  x: number
  y: number
}) => {
  emitter.emit(EVENT_OPEN_SECRET_CATEGORY_MENU_CONTEXTMENU, p)
}

export const listenerOpenSecretCategoryMenuContextmenu = (
  fn: (p: {
    x: number
    y: number
    secret_category_id: string
    secret_category_name: string
  }) => void
) => {
  emitter.on(EVENT_OPEN_SECRET_CATEGORY_MENU_CONTEXTMENU, fn)
}

// 打开编辑分类弹窗
export const emitOpenUpdateSecretCategoryModal = (p: { secret_category_id: string }) => {
  emitter.emit(EVENT_OPEN_UPDATE_SECRET_CATEGORY_MODAL, p)
}

export const listenerOpenUpdateSecretCategoryModal = (
  fn: (p: { secret_category_id: string }) => void
) => {
  emitter.on(EVENT_OPEN_UPDATE_SECRET_CATEGORY_MODAL, fn)
}
