import { ItemType } from '@renderer/shared'

/************* event store ********** */
export interface EventState {}

/************* request store ********** */
export interface RequestState {}

/************* category store ********** */
export interface CategoryState {
  categoryList: ItemType[]
  categoryTreeList: ItemType[]
  categorySelectOptions: ZZ.API.SelectOptions
}
