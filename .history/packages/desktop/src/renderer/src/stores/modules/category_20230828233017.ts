import { defineStore } from 'pinia'
import type { CategoryState } from '../interface'
import { category } from '@renderer/apis'
import { consoleLog } from '@renderer/shared'

const defaultCategoryState: CategoryState = {
  categoryList: []
  categoryTreeList: []
}

export const useCategoryStore = defineStore({
  id: 'music-songsheet',
  state: (): CategoryState => ({ ...defaultCategoryState }),
  getters: {},
  actions: {
    setCategoryList(list: ZZ.API.Categorys = []) {
      this.resetCategoryList()
      this.categoryList = list
    },
    async loadCategoryList() {
      const list = await category.getCategoryMenuList()
      console.log('list:', list)
      this.setCategoryList(list)
    },
    resetCategoryList() {
      this.categoryList = defaultCategoryState.categoryList
    },
    reset() {
      this.$patch((state) => {
        consoleLog('songsheet-store', 'reset')
        state.categoryList = defaultCategoryState.categoryList
      })
    }
  }
})
