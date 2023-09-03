import { emitter } from '../../emitter'
import {} from './event'
// secret-book-detail-page
export function emitRefreshSecretBookDetailPage() {
  emitter.emit('refreshSecretBookDetailPage')
}

export function listenerRefreshSecretBookDetailPage(callback: () => void) {
  emitter.on('refreshSecretBookDetailPage', callback)
}

// add-category-modal
export function emitOpenAddCategoryModal() {
  emitter.emit('openAddCategoryModal')
}

export function listenerOpenAddCategoryModal(callback: () => void) {
  emitter.on('openAddCategoryModal', callback)
}
