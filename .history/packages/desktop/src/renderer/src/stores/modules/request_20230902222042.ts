import { defineStore } from 'pinia'
import { secretCategory, secretBook } from '@renderer/apis'
import type {
  CreateSecretCategoryRequest,
  GetListBySecretCategoryIdRequest,
  SecretBookDetailRequest,
  SecretBookUpdateRequest
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
      return await secretCategory.categoryListAction()
    },
    /**** api get secretcategory treeList ****/
    async getSecretCategoryTreeList() {
      return await secretCategory.categoryTreeListAction()
    },
    /**** api create secretcategory ****/
    async createSecretCategory(p: CreateSecretCategoryRequest) {
      return await secretCategory.createSecretCategoryAction(p)
    },
    /**** api get secretbook list ****/
    async getSecretBookList(p: GetListBySecretCategoryIdRequest) {
      return await secretBook.getListBySecretCategoryIdAction(p)
    },
    /**** api get secretbook detail ****/
    async getSecretBookDetail(p: SecretBookDetailRequest) {
      return await secretBook.secretBookDetailAction(p)
    },
    /**** api update secretbook ****/
    async updateSecretBook(p: SecretBookUpdateRequest) {
      return await secretBook.secretBookUpdateAction(p)
    }
  }
})
