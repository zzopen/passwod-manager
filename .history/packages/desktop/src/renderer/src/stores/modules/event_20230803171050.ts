import { defineStore } from 'pinia'
import type { EventState } from '../interface'

const defaultEventState: EventState = {
  AddCategoryDrawerOpen: false
}

export const usePlayerStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {},
  actions: {
    openAddCategoryDrawer() {}
  }
})