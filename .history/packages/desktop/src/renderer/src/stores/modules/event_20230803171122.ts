import { defineStore } from 'pinia'
import type { EventState } from '../interface'

const defaultEventState: EventState = {
  addCategoryDrawerOpen: false
}

export const usePlayerStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {},
  actions: {
    openAddCategoryDrawer() {
      this.addCategoryDrawerOpen = !this.addCategoryDrawerOpen
    }
  }
})
