import { defineStore } from 'pinia'
import type { EventState } from '../interface'

const defaultEventState: EventState = {}

export const usePlayerStore = defineStore({
  id: 'app-event',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {},
  actions: {}
})
