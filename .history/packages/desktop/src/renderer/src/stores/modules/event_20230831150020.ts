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
    /**** add category modal ****/
    openAddCategoryModal() {
      emitOpenAddCategoryModal()
    },
    /**** update secret-book drawer ****/
    refreshSecretBookDetailPage(p: { id: string }) {
      emitOpenUpdateSecretBookDrawer(p)
    },
    /**** open secret-book-detail-page ****/
    openSecretBookDetailPage(p: { id: string }) {
      emitOpenSecretBookDetailPage(p)
    },
    /**** refresh secret-book-detail-page ****/
    refreshSecretBookDetailPage() {
      emitRefreshSecretBookDetailPage()
    }
  }
})
