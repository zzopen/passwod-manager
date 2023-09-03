import { defineStore } from 'pinia'
import type { SetcretBookState } from '../interface'
import { useRequestStore } from './request'
import type { GetListBySecretCategoryIdRequest } from '@renderer/apis'

const defaultCategoryState: SetcretBookState = {
  secretBookList: [],
  secretBookId: ''
}

export const useSecretBookStore = defineStore({
  id: 'store-secret-book',
  state: (): SetcretBookState => ({ ...defaultCategoryState }),
  getters: {},
  actions: {
    /**** secret-book-list ****/
    async loadSecretBookList(p: GetListBySecretCategoryIdRequest) {
      const requestStore = useRequestStore()
      const list = await requestStore.getSecretBookList(p)
      console.log('list:', list)
      this.setSecretBookList(list)
    },
    setSecretBookList(list: any) {
      this.resetSecretBookList()
      this.secretBookList = list
    },
    resetSecretBookList() {
      this.secretBookList = defaultCategoryState.secretBookList
    },
    /**** secret-book-detail ****/
    setSecretBookList(list: any) {
      this.resetSecretBookList()
      this.secretBookList = list
    },
    resetSecretBook() {
      this.secretBook = defaultCategoryState.secretBook
    },
    reset() {
      this.$patch((state) => {
        state.secretBookList = defaultCategoryState.secretBookList
      })
    }
  }
})
