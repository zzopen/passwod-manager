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
    /**** category list ****/
    async loadCategoryList() {
      const list = await category.categoryListAction()
      console.log('category/list:', list)

      const menuList = category.buildMenuList(list)
      console.log('menuList:', menuList)
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
    /**** category tree list ****/
    async loadCategoryTreeList() {
      const list = await category.categoryTreeListAction()
      console.log('category/treeList:', list)

      const treeList = category.buildMenuList(list)
      console.log('treeList:', treeList)
      this.setCategoryTreeList(treeList)
    },
    setCategoryTreeList(list: ItemType[]) {
      this.resetCategoryTreeList()
      this.categoryTreeList = list
    },
    resetCategoryTreeList() {
      this.categoryTreeList = defaultCategoryState.categoryTreeList
    },
    /**** category select options ****/
    setCategorySelectOptions(list: ZZ.API.SelectOptions) {
      this.resetCategorySelectOptions()
      this.categorySelectOptions = list
    },
    buildCategorySelectOptions(data: ZZ.API.Categorys): ZZ.API.SelectOptions {
      if (!data || data.length <= 0) {
        return []
      }

      const res: ZZ.API.SelectOptions = []
      for (const item of data) {
        const temp: ZZ.API.SelectOption = {
          value: item.id,
          label: item.name
        }

        res.push(temp)
      }

      return res
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
