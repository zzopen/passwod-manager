import { defineStore } from 'pinia'
import { APP_NAME } from '@common/config'

export interface MixState {
  title: string
}

const defaultState: MixState = {
  title: `欢迎使用 ${APP_NAME}`
}

export const useMixStore = defineStore({
  id: 'store-mix',
  state: (): MixState => ({ ...defaultState }),
  getters: {},
  actions: {}
})
