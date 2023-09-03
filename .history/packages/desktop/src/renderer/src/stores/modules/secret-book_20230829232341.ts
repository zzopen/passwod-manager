import { defineStore } from 'pinia'
import type { SetcretBookState } from '../interface'
import { consoleLog, type ItemType } from '@renderer/shared'
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

      const menuList = secretCategory.buildMenuList(list)
      this.setCategoryList(menuList)

      this.setCategorySelectOptions(this.buildCategorySelectOptions(list))
    },
    setCategoryList(list: ItemType[]) {
      this.resetCategoryList()
      this.categoryList = list
    },
    resetCategoryList() {
      this.categoryList = defaultCategoryState.categoryList
    },
    async refreshLoadCategoryList() {
      await this.loadCategoryList()
    },
    reset() {
      this.$patch((state) => {
        consoleLog('songsheet-store', 'reset')
        state.secretBookList = defaultCategoryState.secretBookList
      })
    }
  }
})
