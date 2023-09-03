import { defineStore } from 'pinia'
import type { EventState } from '../interface'
import { emitOpenAddCategoryModal, emitRefreshSecretBookDetailPage } from '@renderer/shared'

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
    /**** refresh secret-book-detail ****/
    refreshSecretBookDetailPage(p: { id: string }) {
      emitRefreshSecretBookDetailPage(p)
    }
  }
})
