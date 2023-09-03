import { emitter } from '../../emitter'
import { EVENT_CLICK_SECRET_BOOK_LIST_ITEM, EVENT_OPEN_UPDATE_SECRET_BOOK_DRAWER } from './event'

export function emitClickSecretBookListItem(p: { secret_book_id: string }) {
  emitter.emit(EVENT_CLICK_SECRET_BOOK_LIST_ITEM, p)
}

export function listenerClickSecretBookListItem(fn: (p: { secret_book_id: string }) => void) {
  emitter.on(EVENT_CLICK_SECRET_BOOK_LIST_ITEM, fn)
}

export function emitOpenUpdateSecretBookDrawer(p: { secret_book_id: string }) {
  emitter.emit(EVENT_CLICK_SECRET_BOOK_LIST_ITEM, p)
}

export function listenerClickSecretBookListItem(fn: (p: { secret_book_id: string }) => void) {
  emitter.on(EVENT_CLICK_SECRET_BOOK_LIST_ITEM, fn)
}
