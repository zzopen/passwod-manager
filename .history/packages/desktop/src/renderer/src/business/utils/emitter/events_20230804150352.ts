import { emitter } from './index'

function emitOpenRightContentPage() {
  emitter.emit('open-right-content-page')
}

function emitClear() {
  emitter.all.clear()
}

export { emitPlay, emitPause, emitClear }

// const emitter: Emitter<Events> = mitt<Events>();

// export function emitRoute(r: RouteLocationNormalized) {
//   emitter.emit("app_route_change", r);
// }

// export function listenerRoute(
//   callback: (route: RouteLocationNormalized) => void
// ) {
//   emitter.on("app_route_change", callback);
// }

//
