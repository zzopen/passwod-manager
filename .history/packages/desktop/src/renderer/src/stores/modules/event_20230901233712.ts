import { defineStore } from 'pinia'
import { emitOpenAddCategoryModal, emitRefreshSecretBookDetailPage } from '@renderer/shared'
export interface EventState {}

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
