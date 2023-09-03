import { defineStore } from 'pinia'
import { secretCategory, secretBook } from '@renderer/apis'
import type {
  ArpCreateSecretCategory,
  ArpDeleteSecretCategory,
  ArpGetSecretBookList,
  SecretBookDetailRequest,
  ArpUpdateSecretBook,
  ArpDeleteSecretBook
} from '@renderer/apis'

export interface RequestState {}

const defaultState: RequestState = {}

export const useRequestStore = defineStore({
  id: 'store-request',
  state: (): RequestState => ({ ...defaultState }),
  getters: {},
  actions: {
    /**** api get secret-category list ****/
    async getSecretCategoryList() {
      return await secretCategory.getSecretCategoryListAction()
    },
    /**** api get secret-category treeList ****/
    async getSecretCategoryTreeList() {
      return await secretCategory.getSecretCategoryTreeListAction()
    },
    /**** api create secret-category ****/
    async createSecretCategory(p: ArpCreateSecretCategory) {
      return await secretCategory.createSecretCategoryAction(p)
    },
    /**** api update secret-book ****/
    async deleteSecretCategory(p: ArpDeleteSecretCategory) {
      return await secretCategory.deleteSecretCategoryAction(p)
    },
    /**** api get secret-book list ****/
    async getSecretBookList(p: ArpGetSecretBookList) {
      return await secretBook.getSecretBookListAction(p)
    },
    /**** api get secret-book detail ****/
    async getSecretBookDetail(p: SecretBookDetailRequest) {
      return await secretBook.secretBookDetailAction(p)
    },
    /**** api update secret-book ****/
    async updateSecretBook(p: ArpUpdateSecretBook) {
      return await secretBook.updateSecretBookAction(p)
    },
    /**** api update secret-book ****/
    async deleteSecretBook(p: ArpDeleteSecretBook) {
      return await secretBook.deleteSecretBookAction(p)
    }
  }
})
