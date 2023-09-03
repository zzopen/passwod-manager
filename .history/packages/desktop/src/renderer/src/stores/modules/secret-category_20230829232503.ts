import { defineStore } from 'pinia'
import type { CategoryState } from '../interface'
import { secretCategory } from '@renderer/apis'
import { type ItemType } from '@renderer/shared'
import { useRequestStore } from './request'

const defaultCategoryState: CategoryState = {
  categoryList: [],
  categoryTreeList: [],
  categorySelectOptions: []
}

export const useCategoryStore = defineStore({
  id: 'store-category',
  state: (): CategoryState => ({ ...defaultCategoryState }),
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
    buildCategorySelectOptions(data: ZZ.API.SecretCategorys): ZZ.API.SelectOptions {
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
        state.categoryList = defaultCategoryState.categoryList
        state.categoryTreeList = defaultCategoryState.categoryTreeList
        state.categorySelectOptions = defaultCategoryState.categorySelectOptions
      })
    }
  }
})
