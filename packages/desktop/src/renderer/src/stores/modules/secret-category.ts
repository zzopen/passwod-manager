import { defineStore } from 'pinia'
import { secretCategory } from '@renderer/apis'
import type { ItemType } from '@renderer/shared/deps'
import { buildDataOptions } from '@renderer/shared'
import { useRequestStore } from './request'
import type { SecretCategorys } from '@common/types'

export interface SecretCategoryState {
  apiSecretCategoryList: SecretCategorys
}

const defaultState: SecretCategoryState = {
  apiSecretCategoryList: []
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
    getSecretCategorySelectOptions(state) {
      if (state.apiSecretCategoryList.length == 0) {
        return []
      }
      return buildDataOptions(state.apiSecretCategoryList)
    }
  },
  actions: {
    /**** category list ****/
    async loadCategoryList() {
      const requestStore = useRequestStore()
      const list = await requestStore.getSecretCategoryList()
      this.apiSecretCategoryList = list
    },
    resetApiSecretCategoryList() {
      this.apiSecretCategoryList = defaultState.apiSecretCategoryList
    },
    async refreshSecretCategoryList() {
      this.resetApiSecretCategoryList()
      await this.loadCategoryList()
    },
    /**** category select options ****/
    reset() {
      this.$patch((state) => {
        state.apiSecretCategoryList = defaultState.apiSecretCategoryList
      })
    }
  }
})
