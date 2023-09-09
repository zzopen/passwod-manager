import { defineStore } from 'pinia'
import { useRequestStore } from './request'
import type { ArpGetSecretBookList, SecretBookDetailRequest } from '@renderer/apis'
import type { Nullable, SecretBook, SecretBooks } from '@common/types'

export interface SetcretBookState {
  apiSecretBook: Nullable<SecretBook>
  apiSecretBookList: SecretBooks
  secretBookSearch: ArpGetSecretBookList
}

const defaultState: SetcretBookState = {
  apiSecretBook: null,
  apiSecretBookList: [],
  secretBookSearch: {}
}

export const useSecretBookStore = defineStore({
  id: 'store-secret-book',
  state: (): SetcretBookState => ({ ...defaultState }),
  getters: {},
  actions: {
    /**** secret-book-list ****/
    async loadSecretBookList(p: ArpGetSecretBookList) {
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
    resetSecretBookSearch() {
      this.secretBookSearch = defaultState.secretBookSearch
    },
    reset() {
      this.$patch((state) => {
        state.apiSecretBookList = defaultState.apiSecretBookList
        state.apiSecretBook = defaultState.apiSecretBook
        state.secretBookSearch = defaultState.secretBookSearch
      })
    }
  }
})
