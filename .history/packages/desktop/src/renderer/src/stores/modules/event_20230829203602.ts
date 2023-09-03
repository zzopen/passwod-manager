import { defineStore } from 'pinia'
import type { EventState } from '../interface'
import {
  emitOpenAddCategoryModal,
  emitOpenRightContentPage,
  emitOpenUpdateAccountDrawer,
  emitRefreshRightContentPage
} from '@renderer/shared'

import { category } from '@renderer/apis'
const defaultEventState: EventState = {}

export const useEventStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {},
  actions: {
    /**** update account drawer ****/
    openUpdateAccountDrawer(p: { id: string }) {
      emitOpenUpdateAccountDrawer(p)
    },
    /**** right content page ****/
    openRightContentPage(p: { id: string }) {
      emitOpenRightContentPage(p)
    },
    refreshRightContentPage() {
      emitRefreshRightContentPage()
    },
    /**** add category modal ****/
    openAddCategoryModal() {
      emitOpenAddCategoryModal()
    },
    /**** api create category ****/
    async createCategory(p: any) {
      await category.createCategoryAction(p)
    }
  }
})
