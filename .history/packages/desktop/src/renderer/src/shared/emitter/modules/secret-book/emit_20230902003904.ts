import { emitter } from '../../emitter'
import { EVENT_CLICK_SECRET_BOOK_LIST_ITEM } from './event'

export function emitRefreshSecretBookDetailPage() {
  emitter.emit(EVENT_CLICK_SECRET_BOOK_LIST_ITEM)
}

export function listenerRefreshSecretBookDetailPage(callback: () => void) {
  emitter.on(EVENT_CLICK_SECRET_BOOK_LIST_ITEM, callback)
}
