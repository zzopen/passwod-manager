import { defineStore } from 'pinia'
import {
  emitOpenCreateSecretCategoryModal,
  emitClickSecretCategoryMenuItem
} from '@renderer/shared'

export interface EventState {}

const defaultState: EventState = {}

export const useEventStore = defineStore({
  id: 'store-event',
  state: (): EventState => ({ ...defaultState }),
  getters: {},
  actions: {
    /**** open create secret-category modal ****/
    openCreateSecretCategoryModal() {
      emitOpenCreateSecretCategoryModal()
    },
    /**** refresh secret-book-detail ****/
    refreshSecretBookDetailPage() {
      //emitRefreshSecretBookDetailPage()
    }
  }
})
