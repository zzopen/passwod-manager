import { defineStore } from 'pinia'
import type { RequestState } from '../interface'
import { secretCategory, type CreateSecretCategoryRequest } from '@renderer/apis'
const defaultRequestState: RequestState = {}

export const useRequestStore = defineStore({
  id: 'store-request',
  state: (): RequestState => ({ ...defaultRequestState }),
  getters: {},
  actions: {
    /**** api get secretcategory list ****/
    /**** api get secretcategory treeList ****/
    async getCategoryTreeList() {},
    /**** api create secretcategory ****/
    async createCategory(p: CreateSecretCategoryRequest) {
      await secretCategory.createSecretCategoryAction(p)
    }
    /**** api get secretbook list ****/
  }
})
