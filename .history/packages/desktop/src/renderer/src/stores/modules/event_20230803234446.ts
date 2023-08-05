import { defineStore } from 'pinia'
import type { EventState } from '../interface'

const defaultEventState: EventState = {
  addCategoryModalOpen: false,
  updateAccountDrawerOpen: false
  rightContentOpen: false,
}

export const useEventStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {
    getAddCategoryModalOpen(state): boolean {
      return state.addCategoryModalOpen
    },
    getUpdateAccountDrawerOpen(state): boolean {
      return state.updateAccountDrawerOpen
    },
    getRightContentOpen(state): boolean {
      return state.rightContentOpen
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
      this.addCategoryModalOpen = true
    },
    closeAddCategoryModal() {
      this.addCategoryModalOpen = false
    },
    toggleAddCategoryModal() {
      this.addCategoryModalOpen = !this.addCategoryModalOpen
    }
  }
})
