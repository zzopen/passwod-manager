import { emitter } from './index'

export function emitClear() {
  emitter.all.clear()
}

// right-content-page
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

// update-account-drawer
export function emitOpenUpdateAccountDrawer(p: { id: string }) {
  emitter.emit('openUpdateAccountDrawer', p)
}

export function listenerOpenUpdateAccountDrawer(callback: (p: { id: string }) => void) {
  emitter.on('openUpdateAccountDrawer', callback)
}

// add-category-modal
export function emitOpenAddCategoryModal() {
  emitter.emit('openAddCategoryModal')
}

export function listenerOpenAddCategoryModal(callback: () => void) {
  emitter.on('openAddCategoryModal', callback)
}
