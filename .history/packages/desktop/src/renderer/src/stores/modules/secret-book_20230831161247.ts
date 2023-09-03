import { defineStore } from 'pinia'
import type { SetcretBookState } from '../interface'
import { useRequestStore } from './request'
import type { GetListBySecretCategoryIdRequest, GetSecretBookRequest } from '@renderer/apis'

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
    async loadSecretBook(p: GetListBySecretCategoryIdRequest) {
      const requestStore = useRequestStore()
      const list = await requestStore.getSecretBookList(p)
      this.apiSecretBookList = list
    },
    resetSecretBookId() {
      this.secretBookId = defaultState.secretBookId
    },
    reset() {
      this.$patch((state) => {
        state.secretBookList = defaultState.secretBookList
      })
    }
  }
})
