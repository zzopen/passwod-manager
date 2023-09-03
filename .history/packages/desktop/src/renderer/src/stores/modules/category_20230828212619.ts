import { defineStore } from 'pinia'
import type { CategoryState } from '../interface'
import { category } from '@renderer/apis'
import { consoleLog } from '@renderer/shared'

const defaultCategoryState: CategoryState = {
  categoryList: []
}

export const useCategoryStore = defineStore({
  id: 'music-songsheet',
  state: (): CategoryState => ({ ...defaultCategoryState }),
  getters: {},
  actions: {
    setSongsheetList(songsheetList: ZZ.DTO.SongsheetList = []) {
      this.resetSongsheetList()
      this.songsheetList = songsheetList
    },
    async changeSongsheetList() {
      const list = await songsheet.songsheetListAction()
      this.setSongsheetList(list)
    },
    resetSongsheetList() {
      this.songsheetList = defaultSongsheetState.songsheetList
    },
    reset() {
      this.$patch((state) => {
        consoleLog('songsheet-store', 'reset')
        state.songsheetList = defaultSongsheetState.songsheetList
      })
    }
  }
})
