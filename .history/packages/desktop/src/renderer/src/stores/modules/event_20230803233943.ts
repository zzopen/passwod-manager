import { defineStore } from 'pinia'
import type { EventState } from '../interface'

const defaultEventState: EventState = {
  addCategoryDrawerOpen: false,
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
    /**** 修改账号信息的抽屉 ****/
    openAddCategoryDrawer() {
      this.addCategoryDrawerOpen = !this.addCategoryDrawerOpen
    },
    hideAddCategoryDrawer() {
      this.addCategoryDrawerOpen = false
    },
    showAddCategoryDrawer() {
      this.addCategoryDrawerOpen = true
    },
    /**** 添加分类信息的抽屉 ****/
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
