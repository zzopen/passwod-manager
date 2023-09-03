import { defineStore } from 'pinia'

export interface EventState {}

const defaultState: EventState = {}

export const useEventStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultState }),
  getters: {},
  actions: {}
})
