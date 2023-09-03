import { ItemType } from '@renderer/shared'

/************* event store ********** */
export interface EventState {}

/************* request store ********** */
export interface RequestState {}

/************* secret-category store ********** */
export interface CategoryState {
  categoryList: ItemType[]
  categoryTreeList: ItemType[]
  categorySelectOptions: ZZ.API.SelectOptions
}

/************* secret-book store ********** */
export interface SetcretBookState {
  secretBookList: ZZ.API.SecretBooks
  secretBookId: string
  updateSecretBookId: string
}
