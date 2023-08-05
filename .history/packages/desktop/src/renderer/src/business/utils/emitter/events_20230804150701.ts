import { emitter } from './index'

function emitOpenRightContentPage() {
  emitter.emit('openRightContentPage')
}

function listenerOpenRightContentPage(callback: () => void) {
  emitter.on('openRightContentPage', callback)
}

function emitClear() {
  emitter.all.clear()
}

export { emitOpenRightContentPage, listenerOpenRightContentPage, emitClear }
