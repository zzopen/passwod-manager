import { defineStore } from 'pinia'
import type { EventState } from '../interface'
import { secretCategory, type CreateSecretCategoryRequest } from '@renderer/apis'
const defaultEventState: EventState = {}

export const useRequestStore = defineStore({
  id: 'store-request',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {},
  actions: {
    /**** api create secretcategory ****/
    async createCategory(p: CreateSecretCategoryRequest) {
      await secretCategory.createSecretCategoryAction(p)
    }
    /**** api get secretbook list ****/
  }
})
