import { defineStore } from 'pinia'
import type { EventState } from '../interface'

const defaultEventState: EventState = {
  addCategoryModalOpen: false,
  rightContentShow: false,
  updateAccountDrawerOpen: false
}

export const useEventStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {
    getAddCategoryDrawerOpen(state): boolean {
      return state.addCategoryDrawerOpen
    },
    getUpdateAccountDrawerOpen(state): boolean {
      return state.updateAccountDrawerOpen
    },
    getRightContentOpen(state): boolean {
      return state.addCategoryDrawerOpen
    }
  },
  actions: {
    /**** update account drawer ****/
    openUpdateAccountDrawer() {
      this.updateAccountDrawerOpen = true
    },
    closeUpdateAccountDrawer() {
      this.updateAccountDrawerOpen = false
    },
    toggleUpdateAccountDrawer() {
      this.updateAccountDrawerOpen = !this.updateAccountDrawerOpen
    },
    /**** 张哈 ****/
    /**** add category modal ****/
    openAddCategoryModal() {
      this.addCategoryDrawerOpen = true
    },
    closeAddCategoryModal() {
      this.addCategoryDrawerOpen = false
    },
    toggleAddCategoryModal() {
      this.addCategoryDrawerOpen = !this.addCategoryDrawerOpen
    }
  }
})
