import { defineStore } from 'pinia'
import type { SetcretBookState } from '../interface'
import { useRequestStore } from './request'

const defaultCategoryState: SetcretBookState = {
  secretBookList: []
}

export const useSecretBookStore = defineStore({
  id: 'store-secret-book',
  state: (): SetcretBookState => ({ ...defaultCategoryState }),
  getters: {},
  actions: {
    async loadSecretBookList(p: any) {
      const requestStore = useRequestStore()
      const list = await requestStore.getSecretBookList(p)
      this.setSecretBookList(list)
    },
    setSecretBookList(list: any) {
      this.resetSecretBookList()
      this.secretBookList = list
    },
    resetSecretBookList() {
      this.secretBookList = defaultCategoryState.secretBookList
    },
    reset() {
      this.$patch((state) => {
        state.secretBookList = defaultCategoryState.secretBookList
      })
    }
  }
})
