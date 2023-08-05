import { emitter } from './index'

function emitOpenRightContentPage(p: { id: number | string }) {
  emitter.emit('openRightContentPage', p)
}

function listenerOpenRightContentPage(callback: (p: { id: number | string }) => void) {
  emitter.on('openRightContentPage', callback)
}

function emitClear() {
  emitter.all.clear()
}

export { emitOpenRightContentPage, listenerOpenRightContentPage, emitClear }
