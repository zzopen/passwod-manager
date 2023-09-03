import { emitter } from '../../emitter'
import { EVENT_CLICK_SECRET_BOOK_LIST_ITEM } from './event'

export function emitRefreshSecretBookDetailPage(p: { secret_book_id: string }) {
  emitter.emit(EVENT_CLICK_SECRET_BOOK_LIST_ITEM, p)
}

export function listenerRefreshSecretBookDetailPage(
  callback: (p: { secret_book_id: string }) => void
) {
  emitter.on(EVENT_CLICK_SECRET_BOOK_LIST_ITEM, callback)
}
