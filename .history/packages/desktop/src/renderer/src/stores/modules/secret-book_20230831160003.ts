import { defineStore } from 'pinia'
import type { SetcretBookState } from '../interface'
import { useRequestStore } from './request'
import type { GetListBySecretCategoryIdRequest } from '@renderer/apis'

const defaultState: SetcretBookState = {
  secretBookList: [],
  secretBookId: '',
  updateSecretBookId: ''
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
      this.setSecretBookList(list)
    },
    setSecretBookList(list: any) {
      this.resetSecretBookList()
      this.secretBookList = list
    },
    resetSecretBookList() {
      this.secretBookList = defaultState.secretBookList
    },
    /**** secret-book-id ****/
    setSecretBookId(id: string) {
      this.secretBookId = id
    },
    resetSecretBookId() {
      this.secretBookId = defaultState.secretBookId
    },
    /**** update secret-book-id ****/
    setUpdateSecretBookId(id: string) {
      this.updateSecretBookId = id
    },
    resetUpdateSecretBookId() {
      this.updateSecretBookId = defaultState.updateSecretBookId
    },
    reset() {
      this.$patch((state) => {
        state.secretBookList = defaultState.secretBookList
      })
    }
  }
})
