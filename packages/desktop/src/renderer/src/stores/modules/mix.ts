import { defineStore } from 'pinia'

export interface MixState {
  title: string
}

const defaultState: MixState = {
  title: '欢迎使用 ZZ Cipher'
}

export const useMixStore = defineStore({
  id: 'store-mix',
  state: (): MixState => ({ ...defaultState }),
  getters: {},
  actions: {}
})
