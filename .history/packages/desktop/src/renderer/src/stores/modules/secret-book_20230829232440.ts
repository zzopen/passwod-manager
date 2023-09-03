import { defineStore } from 'pinia'
import type { SetcretBookState } from '../interface'
import { consoleLog } from '@renderer/shared'
import { useRequestStore } from './request'

const defaultCategoryState: SetcretBookState = {
  secretBookList: []
}

export const useSecretBookStore = defineStore({
  id: 'store-book',
  state: (): SetcretBookState => ({ ...defaultCategoryState }),
  getters: {},
  actions: {
    /**** category list ****/
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
