import { defineStore } from 'pinia'
import { secretCategory, secretBook } from '@renderer/apis'
import type {
  CreateSecretCategoryRequest,
  ArpGetSecretBookList,
  SecretBookDetailRequest,
  ArpUpdateSecretBook
} from '@renderer/apis'

export interface RequestState {}

const defaultState: RequestState = {}

export const useRequestStore = defineStore({
  id: 'store-request',
  state: (): RequestState => ({ ...defaultState }),
  getters: {},
  actions: {
    /**** api get secretcategory list ****/
    async getSecretCategoryList() {
      return await secretCategory.getSecretCategoryListAction()
    },
    /**** api get secretcategory treeList ****/
    async getSecretCategoryTreeList() {
      return await secretCategory.getSecretCategoryTreeListAction()
    },
    /**** api create secretcategory ****/
    async createSecretCategory(p: CreateSecretCategoryRequest) {
      return await secretCategory.createSecretCategoryAction(p)
    },
    /**** api get secretbook list ****/
    async getSecretBookList(p: ArpGetSecretBookList) {
      return await secretBook.getSecretBookListAction(p)
    },
    /**** api get secretbook detail ****/
    async getSecretBookDetail(p: SecretBookDetailRequest) {
      return await secretBook.secretBookDetailAction(p)
    },
    /**** api update secretbook ****/
    async updateSecretBook(p: ArpUpdateSecretBook) {
      return await secretBook.updateSecretBookAction(p)
    }
  }
})
