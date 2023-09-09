import { emitter } from '../emitter'

import { EVENT_REFRESH_HOME_PAGE } from './event'

export function emitClear() {
  emitter.all.clear()
}

export const emitRefreshHomePage = (p?: { secret_category_id?: string }) => {
  emitter.emit(EVENT_REFRESH_HOME_PAGE, p)
}

export const listenerRefreshHomePage = (fn: (p?: { secret_category_id?: string }) => void) => {
  emitter.on(EVENT_REFRESH_HOME_PAGE, fn)
}
