import { defineStore } from 'pinia'
import type { RequestState } from '../interface'
import { secretCategory, secretBook } from '@renderer/apis'
import type {
  CreateSecretCategoryRequest,
  GetListBySecretCategoryIdRequest,
  SecretBookDetailRequest,
  SecretBookUpdateRequest
} from '@renderer/apis'

const defaultRequestState: RequestState = {}

export const useRequestStore = defineStore({
  id: 'store-request',
  state: (): RequestState => ({ ...defaultRequestState }),
  getters: {},
  actions: {
    /**** api get secretcategory list ****/
    async getCategoryList() {
      return await secretCategory.categoryListAction()
    },
    /**** api get secretcategory treeList ****/
    async getCategoryTreeList() {
      return await secretCategory.categoryTreeListAction()
    },
    /**** api create secretcategory ****/
    async createCategory(p: CreateSecretCategoryRequest) {
      await secretCategory.createSecretCategoryAction(p)
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
