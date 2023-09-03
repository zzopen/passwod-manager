import mitt, { Emitter } from 'mitt'
import type { Events } from './emitter/typings'

const emitter: Emitter<Events> = mitt<Events>()

export { emitter }
export * from './events'
