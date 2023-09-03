import { ItemType } from '@renderer/shared'

/************* event store ********** */
export interface EventState {}

/************* category store ********** */
export interface CategoryState {
  categoryList: ItemType[]
  categoryTreeList: ItemType[]
  categorySelectOptions: ZZ.API.SelectOptions
}
