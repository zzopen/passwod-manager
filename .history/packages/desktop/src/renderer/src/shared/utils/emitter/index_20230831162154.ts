import mitt, { Emitter } from 'mitt'
import type { Events } from './emitter/event'

const emitter: Emitter<Events> = mitt<Events>()

export { emitter }
export * from './events'
