import { defineStore } from 'pinia'
import type { CategoryState } from '../interface'
import { category } from '@renderer/apis'
import { consoleLog, type ItemType } from '@renderer/shared'

const defaultCategoryState: CategoryState = {
  categoryList: [],
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
    setCategoryTreeList(list: ItemType[]) {
      this.resetCategoryTreeList()
      this.categoryTreeList = list
    },
    async loadCategoryList() {
      const list = await category.categoryTreeListAction()
      this.setCategoryList(list)
      console.log('list:', list)

      const treeList = category.buildMenu(list)
      console.log('treeList:', treeList)
      this.setCategoryTreeList(treeList)
    },
    resetCategoryList() {
      this.categoryList = defaultCategoryState.categoryList
    },
    resetCategoryTreeList() {
      this.categoryTreeList = defaultCategoryState.categoryTreeList
    },
    reset() {
      this.$patch((state) => {
        consoleLog('songsheet-store', 'reset')
        state.categoryList = defaultCategoryState.categoryList
        state.categoryTreeList = defaultCategoryState.categoryTreeList
      })
    }
  }
})
