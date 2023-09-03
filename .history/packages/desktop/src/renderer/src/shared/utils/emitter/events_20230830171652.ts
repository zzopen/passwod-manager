import { emitter } from './index'

function emitClear() {
  emitter.all.clear()
}

// right-content-page
function emitOpenRightContentPage(p: { id: string }) {
  emitter.emit('openSecretBookDetailPage', p)
}

function listenerOpenSecretBookDetailPage(callback: (p: { id: string }) => void) {
  emitter.on('openSecretBookDetailPage', callback)
}

function emitRefreshRightContentPage() {
  emitter.emit('refreshRightContentPage')
}

function listenerRefreshRightContentPage(callback: () => void) {
  emitter.on('refreshRightContentPage', callback)
}

// update-account-drawer
function emitOpenUpdateAccountDrawer(p: { id: string }) {
  emitter.emit('openUpdateAccountDrawer', p)
}

function listenerOpenUpdateAccountDrawer(callback: (p: { id: string }) => void) {
  emitter.on('openUpdateAccountDrawer', callback)
}

// add-category-modal
function emitOpenAddCategoryModal() {
  emitter.emit('openAddCategoryModal')
}

function listenerOpenAddCategoryModal(callback: () => void) {
  emitter.on('openAddCategoryModal', callback)
}

export {
  emitOpenRightContentPage,
  listenerOpenRightContentPage,
  emitRefreshRightContentPage,
  listenerRefreshRightContentPage,
  emitOpenUpdateAccountDrawer,
  emitOpenAddCategoryModal,
  listenerOpenAddCategoryModal,
  listenerOpenUpdateAccountDrawer,
  emitClear
}
