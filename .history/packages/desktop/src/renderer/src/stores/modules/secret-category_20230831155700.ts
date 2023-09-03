import { defineStore } from 'pinia'
import type { CategoryState } from '../interface'
import { secretCategory } from '@renderer/apis'
import type { ItemType } from '@renderer/shared'
import { useRequestStore } from './request'

const defaultCategoryState: CategoryState = {
  apiSecretCategoryList: [],
  apiSecretCategoryTreeList: []
}

export const useSecretCategoryStore = defineStore({
  id: 'store-secret-category',
  state: (): CategoryState => ({ ...defaultCategoryState }),
  getters: {
    getSecretCategoryList(state): ItemType[] {
      if (state.apiSecretCategoryList.length == 0) {
        return []
      }

      return secretCategory.buildMenuList(state.apiSecretCategoryList)
    },
    getSecretCategorySelectOptions(state) {
      if (state.apiSecretCategoryList.length == 0) {
        return []
      }
      return secretCategory.buildCategorySelectOptions(state.apiSecretCategoryList)
    }
  },
  actions: {
    /**** category list ****/
    async loadCategoryList() {
      const requestStore = useRequestStore()
      const list = await requestStore.getCategoryList()
      this.apiSecretCategoryList = list
    },
    resetApiSecretCategoryList() {
      this.apiSecretCategoryList = defaultCategoryState.apiSecretCategoryList
    },
    async refreshSecretCategoryList() {
      this.refreshSecretCategoryList()
      await this.loadCategoryList()
    },
    /**** category select options ****/
    reset() {
      this.$patch((state) => {
        state.apiSecretCategoryList = defaultCategoryState.apiSecretCategoryList
        state.apiSecretCategoryTreeList = defaultCategoryState.apiSecretCategoryTreeList
      })
    }
  }
})
