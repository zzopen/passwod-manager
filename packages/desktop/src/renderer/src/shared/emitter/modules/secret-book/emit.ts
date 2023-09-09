import { emitter } from '../emitter'
import {
  EVENT_SEARCH_SECRET_BOOK_DETAIL,
  EVENT_OPEN_UPDATE_SECRET_BOOK_DRAWER,
  EVENT_LOAD_SECRET_BOOK_LIST,
  EVENT_OPEN_CREATE_SECRET_BOOK_DRAWER
} from './event'

import type { ArpGetSecretBookList } from '@renderer/apis'

export const emitSearchSecretBookDetail = (p: { secret_book_id: string }) => {
  emitter.emit(EVENT_SEARCH_SECRET_BOOK_DETAIL, p)
}

export const listenerSearchSecretBookDetail = (fn: (p: { secret_book_id: string }) => void) => {
  emitter.on(EVENT_SEARCH_SECRET_BOOK_DETAIL, fn)
}

export const emitOpenUpdateSecretBookDrawer = (p: { secret_book_id: string }) => {
  emitter.emit(EVENT_OPEN_UPDATE_SECRET_BOOK_DRAWER, p)
}

export const listenerOpenUpdateSecretBookDrawer = (fn: (p: { secret_book_id: string }) => void) => {
  emitter.on(EVENT_OPEN_UPDATE_SECRET_BOOK_DRAWER, fn)
}

export const emitLoadSecretBookList = (p: ArpGetSecretBookList) => {
  emitter.emit(EVENT_LOAD_SECRET_BOOK_LIST, p)
}

export const listenerLoadSecretBookList = (fn: (p: ArpGetSecretBookList) => void) => {
  emitter.on(EVENT_LOAD_SECRET_BOOK_LIST, fn)
}

export const emitOpenCreateSecretBookDrawer = (p: { secret_category_id?: string }) => {
  emitter.emit(EVENT_OPEN_CREATE_SECRET_BOOK_DRAWER, p)
}

export const listenerOpenCreateSecretBookDrawer = (
  fn: (p: { secret_category_id?: string }) => void
) => {
  emitter.on(EVENT_OPEN_CREATE_SECRET_BOOK_DRAWER, fn)
}
