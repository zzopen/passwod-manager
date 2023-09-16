import { defineStore } from 'pinia'
import { secretCategory, secretBook, app } from '@renderer/apis'

import type {
  ArpCreateSecretCategory,
  ArpDeleteSecretCategory,
  ArpUpdateSecretCategory,
  SecretCategoryDetailRequest,
  ArpGetSecretBookList,
  ArpCreateSecretBook,
  ArpDeleteSecretBook,
  ArpUpdateSecretBook,
  SecretBookDetailRequest,
  ArpExportData
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
    /**** api get secret-category detail ****/
    async getSecretCategoryDetail(p: SecretCategoryDetailRequest) {
      return await secretCategory.secretCategoryDetailAction(p)
    },
    /**** api create secret-category ****/
    async createSecretCategory(p: ArpCreateSecretCategory) {
      return await secretCategory.createSecretCategoryAction(p)
    },
    /**** api delete secret-category ****/
    async deleteSecretCategory(p: ArpDeleteSecretCategory) {
      return await secretCategory.deleteSecretCategoryAction(p)
    },
    /**** api update secret-category ****/
    async updateSecretCategory(p: ArpUpdateSecretCategory) {
      return await secretCategory.updateSecretCategoryAction(p)
    },
    /**** api get secret-book list ****/
    async getSecretBookList(p: ArpGetSecretBookList) {
      return await secretBook.getSecretBookListAction(p)
    },
    /**** api get secret-book detail ****/
    async getSecretBookDetail(p: SecretBookDetailRequest) {
      return await secretBook.secretBookDetailAction(p)
    },
    /**** api create secret-book ****/
    async createSecretBook(p: ArpCreateSecretBook) {
      return await secretBook.createSecretBookAction(p)
    },
    /**** api update secret-book ****/
    async updateSecretBook(p: ArpUpdateSecretBook) {
      return await secretBook.updateSecretBookAction(p)
    },
    /**** api delete secret-book ****/
    async deleteSecretBook(p: ArpDeleteSecretBook) {
      return await secretBook.deleteSecretBookAction(p)
    },
    /**** api export data ****/
    async exportData(p: ArpExportData) {
      return await app.exportDataAction(p)
    }
  }
})
