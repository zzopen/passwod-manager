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
    async loadCategoryList() {
      const requestStore = useRequestStore()
      const list = await requestStore.getCategoryList()

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
        state.categoryList = defaultCategoryState.categoryList
        state.categoryTreeList = defaultCategoryState.categoryTreeList
        state.categorySelectOptions = defaultCategoryState.categorySelectOptions
      })
    }
  }
})
