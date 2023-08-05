import { defineStore } from 'pinia'
import type { EventState } from '../interface'

const defaultEventState: EventState = {
  addCategoryDrawerOpen: false
  rightContentShow: false
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
      this.addCategoryDrawerOpen = !this.addCategoryDrawerOpen
    },
    hideAddCategoryDrawer() {
      this.addCategoryDrawerOpen = false
    },
    showAddCategoryDrawer() {
      this.addCategoryDrawerOpen = true
    }
  }
})
