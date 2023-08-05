import { defineStore } from 'pinia'
import type { EventState } from '../interface'

const defaultEventState: EventState = {
  addCategoryDrawerOpen: false
}

export const useEventStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {
    getAddCategoryDrawerOpen(state): boolean {
      return state.addCategoryDrawerOpen
    }
  },
  actions: {
    openAddCategoryDrawer() {
      console.log(2222)
      this.addCategoryDrawerOpen = !this.addCategoryDrawerOpen
    }
  }
})
