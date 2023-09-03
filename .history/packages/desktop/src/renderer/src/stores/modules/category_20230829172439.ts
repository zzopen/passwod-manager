import { defineStore } from 'pinia'
import type { CategoryState } from '../interface'
import { category } from '@renderer/apis'
import { consoleLog, type ItemType } from '@renderer/shared'

const defaultCategoryState: CategoryState = {
  categoryList: [],
  categoryTreeList: [],
  categorySelectOptions: []
}

export const useCategoryStore = defineStore({
  id: 'music-songsheet',
  state: (): CategoryState => ({ ...defaultCategoryState }),
  getters: {},
  actions: {
    setCategoryList(list: ItemType[]) {
      this.resetCategoryList()
      this.categoryList = list
    },
    setCategoryTreeList(list: ItemType[]) {
      this.resetCategoryTreeList()
      this.categoryTreeList = list
    },
    setCategorySelectOptions(list: ZZ.API.SelectOptions) {
      this.resetCategoryTreeList()
      this.categorySelectOptions = list
    },
    async loadCategoryList() {
      const list = await category.categoryListAction()
      console.log('category/list:', list)

      const menuList = category.buildMenuList(list)
      console.log('menuList:', menuList)
      this.setCategoryList(menuList)
    },
    async loadCategoryTreeList() {
      const list = await category.categoryTreeListAction()
      console.log('category/treeList:', list)

      const treeList = category.buildMenuList(list)
      console.log('treeList:', treeList)
      this.setCategoryTreeList(treeList)
    },
    resetCategoryList() {
      this.categoryList = defaultCategoryState.categoryList
    },
    resetCategoryTreeList() {
      this.categoryTreeList = defaultCategoryState.categoryTreeList
    },
    resetCategorySelectOptions() {
      this.categorySelectOptions = defaultCategoryState.categorySelectOptions
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
