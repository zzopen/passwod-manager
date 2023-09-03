import { defineStore } from 'pinia'
import type { CategoryState } from '../interface'
import { secretCategory } from '@renderer/apis'
import type { ItemType } from '@renderer/shared'
import { useRequestStore } from './request'

const defaultCategoryState: CategoryState = {
  apiCategoryList: [],
  apiCategoryTreeList: [],
  categoryList: [],
  categoryTreeList: [],
  categorySelectOptions: []
}

export const useSecretCategoryStore = defineStore({
  id: 'store-secret-category',
  state: (): CategoryState => ({ ...defaultCategoryState }),
  getters: {
    getSecretCategoryList(state) {
      if (state.apiCategoryList.length == 0) {
        return []
      }

      return secretCategory.buildMenuList(state.apiCategoryList)
    },
    getSecretCategorySelectOptions(state) {
      if (state.apiCategoryList.length == 0) {
        return []
      }
      return state.buildCategorySelectOptions(state.apiCategoryList)
    }
  },
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
    /**** category tree list ****/
    async loadCategoryTreeList() {
      const requestStore = useRequestStore()
      const list = await requestStore.getCategoryTreeList()

      const treeList = secretCategory.buildMenuList(list)
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
    resetCategorySelectOptions() {
      this.categorySelectOptions = defaultCategoryState.categorySelectOptions
    },
    reset() {
      this.$patch((state) => {
        state.categoryList = defaultCategoryState.categoryList
        state.categoryTreeList = defaultCategoryState.categoryTreeList
        state.categorySelectOptions = defaultCategoryState.categorySelectOptions
      })
    }
  }
})
