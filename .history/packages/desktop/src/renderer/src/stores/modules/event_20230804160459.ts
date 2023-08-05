import { defineStore } from 'pinia'
import type { EventState } from '../interface'
import { emitOpenRightContentPage, emitOpenUpdateAccountDrawer } from '@/business/utils'

const defaultEventState: EventState = {}

export const useEventStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {},
  actions: {
    /**** update account drawer ****/
    openUpdateAccountDrawer(p: { id: number | string }) {
      emitOpenUpdateAccountDrawer(p)
    },
    /**** right content page ****/
    openRightContentPage(p: { id: number | string }) {
      emitOpenRightContentPage(p)
    },
    /**** add category modal ****/
    openAddCategoryModal() {
      this.addCategoryModalOpen = true
    }
  }
})
