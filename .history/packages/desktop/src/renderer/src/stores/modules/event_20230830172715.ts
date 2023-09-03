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
    openUpdateSecretBookDrawer(p: { id: string }) {
      emitOpenUpdateSecretBookDrawer(p)
    },
    /**** right content page ****/
    openSecretBookDetailPage(p: { id: string }) {
      emitOpenSecretBookDetailPage(p)
    },
    refreshSecretBookDetailPage() {
      emitRefreshSecretBookDetailPage()
    },
    /**** add category modal ****/
    openAddCategoryModal() {
      emitOpenAddCategoryModal()
    }
  }
})
