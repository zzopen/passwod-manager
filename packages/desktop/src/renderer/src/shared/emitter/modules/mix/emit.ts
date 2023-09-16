import { emitter } from '../emitter'

import {
  EVENT_REFRESH_HOME_PAGE,
  EVENT_OPEN_EXPORT_DATA_MODAL,
  EVENT_OPEN_IMPORT_DATA_MODAL
} from './event'

export function emitClear() {
  emitter.all.clear()
}

export const emitRefreshHomePage = (p?: { secret_category_id?: string }) => {
  emitter.emit(EVENT_REFRESH_HOME_PAGE, p)
}

export const listenerRefreshHomePage = (fn: (p?: { secret_category_id?: string }) => void) => {
  emitter.on(EVENT_REFRESH_HOME_PAGE, fn)
}

export const emitOpenExportDataModal = () => {
  emitter.emit(EVENT_OPEN_EXPORT_DATA_MODAL)
}

export const listenerOpenExportDataModal = (fn: () => void) => {
  emitter.on(EVENT_OPEN_EXPORT_DATA_MODAL, fn)
}

export const emitOpenImportDataModal = () => {
  emitter.emit(EVENT_OPEN_IMPORT_DATA_MODAL)
}

export const listenerOpenImportDataModal = (fn: () => void) => {
  emitter.on(EVENT_OPEN_IMPORT_DATA_MODAL, fn)
}
