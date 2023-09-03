import { ItemType } from '@renderer/shared'

/************* event store ********** */
export interface EventState {}

/************* request store ********** */
export interface RequestState {}

/************* secret-category store ********** */
export interface CategoryState {
  apiSecretCategoryList: ZZ.API.SecretCategorys
  apiSecretCategoryTreeList: ZZ.API.SecretCategorys
  secretCategorySelectOptions: ZZ.API.SelectOptions
}

/************* secret-book store ********** */
export interface SetcretBookState {
  apiSecretBook: ZZ.API.SecretBook
  apiSecretBookList: ZZ.API.SecretBooks
  secretBookList: ZZ.API.SecretBooks
  secretBookId: string
  updateSecretBookId: string
}
