import { emitter } from '../../emitter'
import {
  EVENT_SEARCH_SECRET_BOOK_DETAIL,
  EVENT_OPEN_UPDATE_SECRET_BOOK_DRAWER,
  EVENT_LOAD_SECRET_BOOK_LIST
} from './event'

export function emitSearchSecretBookDetail(p: { secret_book_id: string }) {
  emitter.emit(EVENT_SEARCH_SECRET_BOOK_DETAIL, p)
}

export function listenerSearchSecretBookDetail(fn: (p: { secret_book_id: string }) => void) {
  emitter.on(EVENT_SEARCH_SECRET_BOOK_DETAIL, fn)
}

export function emitOpenUpdateSecretBookDrawer(p: { secret_book_id: string }) {
  emitter.emit(EVENT_OPEN_UPDATE_SECRET_BOOK_DRAWER, p)
}

export function listenerOpenUpdateSecretBookDrawer(fn: (p: { secret_book_id: string }) => void) {
  emitter.on(EVENT_OPEN_UPDATE_SECRET_BOOK_DRAWER, fn)
}

export function emitLoadSecretBookList(p: { secret_category_id: string }) {
  emitter.emit(EVENT_LOAD_SECRET_BOOK_LIST, p)
}

export function listenerLoadSecretBookList(fn: (p: { secret_category_id: string }) => void) {
  emitter.on(EVENT_LOAD_SECRET_BOOK_LIST, fn)
}
