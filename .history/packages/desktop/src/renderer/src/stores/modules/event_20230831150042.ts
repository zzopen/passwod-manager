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
    refreshSecretBookDetail(p: { id: string }) {
      emitRefreshSecretBookDetail(p)
    }
  }
})
