import { defineStore } from 'pinia'
import type { EventState } from '../interface'
import {
  emitOpenAddCategoryModal,
  emitOpenUpdateSecretBookDrawer,
  emitOpenSecretBookDetailPage,
  emitRefreshSecretBookDetailPage
} from '@renderer/shared'

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
    }
  }
})
