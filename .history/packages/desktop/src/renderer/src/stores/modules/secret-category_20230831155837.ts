import { defineStore } from 'pinia'
import type { SecretCategoryState } from '../interface'
import { secretCategory } from '@renderer/apis'
import type { ItemType } from '@renderer/shared'
import { useRequestStore } from './request'

const defaultState: SecretCategoryState = {
  apiSecretCategoryList: [],
  apiSecretCategoryTreeList: []
}

export const useSecretCategoryStore = defineStore({
  id: 'store-secret-category',
  state: (): SecretCategoryState => ({ ...defaultState }),
  getters: {
    getSecretCategoryList(state): ItemType[] {
      if (state.apiSecretCategoryList.length == 0) {
        return []
      }

      return secretCategory.buildMenuList(state.apiSecretCategoryList)
    },
    getSecretCategorySelectOptions(state): ZZ.API.SelectOptions {
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
      this.apiSecretCategoryList = defaultState.apiSecretCategoryList
    },
    async refreshSecretCategoryList() {
      this.refreshSecretCategoryList()
      await this.loadCategoryList()
    },
    /**** category select options ****/
    reset() {
      this.$patch((state) => {
        state.apiSecretCategoryList = defaultState.apiSecretCategoryList
        state.apiSecretCategoryTreeList = defaultState.apiSecretCategoryTreeList
      })
    }
  }
})
