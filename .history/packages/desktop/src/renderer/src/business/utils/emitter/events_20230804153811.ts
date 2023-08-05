import { emitter } from './index'

function emitClear() {
  emitter.all.clear()
}

// right-content-page
function emitOpenRightContentPage(p: { id: number | string }) {
  emitter.emit('openRightContentPage', p)
}

function listenerOpenRightContentPage(callback: (p: { id: number | string }) => void) {
  emitter.on('openRightContentPage', callback)
}

// update-account-drawer
function emitOpenUpdateAccountDrawer(p: { id: number | string }) {
  emitter.emit('openUpdateAccountDrawer', p)
}

function listenerOpenUpdateAccountDrawer(callback: (p: { id: number | string }) => void) {
  emitter.on('openUpdateAccountDrawer', callback)
}

export {
  emitOpenRightContentPage,
  listenerOpenRightContentPage,
  emitOpenUpdateAccountDrawer,
  emitOpenUpdateAccountDrawer,
  emitClear
}
