import { ItemType } from '@renderer/shared'

/************* event store ********** */
export interface EventState {}

/************* category store ********** */
export interface CategoryState {
  categoryList: ZZ.API.Categorys
  categoryTreeList: ItemType[]
}
