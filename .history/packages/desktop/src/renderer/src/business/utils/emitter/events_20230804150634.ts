import { emitter } from './index'

function emitOpenRightContentPage() {
  emitter.emit('openRightContentPage')
}

function listenerOpenRightContentPage(callback: (route: RouteLocationNormalized) => void) {
  emitter.on('app_route_change', callback)
}

function emitClear() {
  emitter.all.clear()
}

export { emitOpenRightContentPage, emitClear }

// export function emitRoute(r: RouteLocationNormalized) {
//   emitter.emit("app_route_change", r);
// }
