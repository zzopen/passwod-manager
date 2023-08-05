import { defineStore } from 'pinia'
import { PlayerStatus } from '@/business/typings'
import { getCurLyricIndex } from '@common/utils'
import { consoleLog } from '@/business/utils'
import { usePlayListStore } from './playList'
import type { EventState } from '../interface'

const defaultEventState: EventState = {}

export const usePlayerStore = defineStore({
  id: 'music-player',
  state: (): EventState => ({ ...defaultEventState }),
  getters: {},
  actions: {}
})
