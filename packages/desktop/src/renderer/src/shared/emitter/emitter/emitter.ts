import mitt, { Emitter } from 'mitt'
import type { Events } from './event'

const emitter: Emitter<Events> = mitt<Events>()

export { emitter }
