import { emitter } from './index'

export function emitClear() {
  emitter.all.clear()
}

// secret-book-detail-page
export function emitOpenSecretBookDetailPage(p: { id: string }) {
  emitter.emit('openSecretBookDetailPage', p)
}

export function listenerOpenSecretBookDetailPage(callback: (p: { id: string }) => void) {
  emitter.on('openSecretBookDetailPage', callback)
}

export function emitRefreshSecretBookDetailPage() {
  emitter.emit('refreshSecretBookDetailPage')
}

export function listenerRefreshSecretBookDetailPage(callback: () => void) {
  emitter.on('refreshSecretBookDetailPage', callback)
}

// update-secret-book-drawer
export function emitOpenUpdateSecretBookDrawer(p: { id: string }) {
  emitter.emit('openUpdateSecretBookDrawer', p)
}

// add-category-modal
export function emitOpenAddCategoryModal() {
  emitter.emit('openAddCategoryModal')
}

export function listenerOpenAddCategoryModal(callback: () => void) {
  emitter.on('openAddCategoryModal', callback)
}
