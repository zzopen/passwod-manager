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
    reset() {
      this.$patch((state) => {
        consoleLog('songsheet-store', 'reset')
        state.categoryList = defaultCategoryState.categoryList
        state.categoryTreeList = defaultCategoryState.categoryTreeList
      })
    }
  }
})
