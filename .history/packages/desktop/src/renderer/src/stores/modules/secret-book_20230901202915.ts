import { defineStore } from 'pinia'
import type { SetcretBookState } from '../types'
import { useRequestStore } from './request'
import type { GetListBySecretCategoryIdRequest, SecretBookDetailRequest } from '@renderer/apis'

const defaultState: SetcretBookState = {
  apiSecretBook: null,
  apiSecretBookList: []
}

export const useSecretBookStore = defineStore({
  id: 'store-secret-book',
  state: (): SetcretBookState => ({ ...defaultState }),
  getters: {},
  actions: {
    /**** secret-book-list ****/
    async loadSecretBookList(p: GetListBySecretCategoryIdRequest) {
      const requestStore = useRequestStore()
      const list = await requestStore.getSecretBookList(p)
      this.apiSecretBookList = list
    },
    resetApiSecretBookList() {
      this.apiSecretBookList = defaultState.apiSecretBookList
    },
    /**** secret-book ****/
    async loadSecretBook(p: SecretBookDetailRequest) {
      const requestStore = useRequestStore()
      this.apiSecretBook = await requestStore.getSecretBookDetail(p)
    },
    resetApiSecretBook() {
      this.apiSecretBook = defaultState.apiSecretBook
    },
    reset() {
      this.$patch((state) => {
        state.apiSecretBookList = defaultState.apiSecretBookList
        state.apiSecretBook = defaultState.apiSecretBook
      })
    }
  }
})
