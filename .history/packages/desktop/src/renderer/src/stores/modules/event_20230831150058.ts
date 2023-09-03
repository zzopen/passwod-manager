import { defineStore } from 'pinia'
import type { EventState } from '../interface'
import { emitOpenAddCategoryModal, emitRefreshSecretBookDetail } from '@renderer/shared'

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
    refreshSecretBookDetail(p: { id: string }) {
      emitRefreshSecretBookDetail(p)
    }
  }
})
