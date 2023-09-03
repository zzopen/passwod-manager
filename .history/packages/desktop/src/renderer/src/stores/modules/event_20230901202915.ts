import { defineStore } from 'pinia'
import type { EventState } from '../types'
import { emitOpenAddCategoryModal, emitRefreshSecretBookDetailPage } from '@renderer/shared'

const defaultState: EventState = {}

export const useEventStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultState }),
  getters: {},
  actions: {
    /**** add category modal ****/
    openAddCategoryModal() {
      emitOpenAddCategoryModal()
    },
    /**** refresh secret-book-detail ****/
    refreshSecretBookDetailPage() {
      emitRefreshSecretBookDetailPage()
    }
  }
})
