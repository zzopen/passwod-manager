import { defineStore } from 'pinia'
import type { EventState } from '../interface'
import { emitOpenRightContentPage, emitOpenUpdateAccountDrawer } from '@/business/utils'

const defaultEventState: EventState = {
  addCategoryModalOpen: false,
  updateAccountDrawerOpen: false,
  rightContentOpen: false
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
    openUpdateAccountDrawer(p: { id: number | string }) {
      emitOpenUpdateAccountDrawer(p)
    },
    closeUpdateAccountDrawer() {
      this.updateAccountDrawerOpen = false
    },
    toggleUpdateAccountDrawer() {
      this.updateAccountDrawerOpen = !this.updateAccountDrawerOpen
    },
    /**** right content page ****/
    openRightContentPage(p: { id: number | string }) {
      emitOpenRightContentPage(p)
    },
    closeRightContentPage() {
      this.rightContentOpen = false
    },
    toggleRightContentPage() {
      this.rightContentOpen = !this.rightContentOpen
    },
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
