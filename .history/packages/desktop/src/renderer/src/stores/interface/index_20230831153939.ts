import { ItemType } from '@renderer/shared'

/************* event store ********** */
export interface EventState {}

/************* request store ********** */
export interface RequestState {}

/************* secret-category store ********** */
export interface CategoryState {
  apiCategoryList: ZZ.API.SecretCategorys
  apiCategoryTreeList: ZZ.API.SecretCategorys
  categoryList: ItemType[]
  categoryTreeList: ItemType[]
  categorySelectOptions: ZZ.API.SelectOptions
}

/************* secret-book store ********** */
export interface SetcretBookState {
  apiSecretBookDetail: ZZ.API.SecretBook
  secretBookList: ZZ.API.SecretBooks
  secretBookId: string
  updateSecretBookId: string
}
