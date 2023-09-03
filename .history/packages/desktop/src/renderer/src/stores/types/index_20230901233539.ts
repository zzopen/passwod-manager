import type { Nullable, SecretBook, SecretBooks, SecretCategorys } from '@common/types'
/************* event store ********** */

/************* request store ********** */
export interface RequestState {}

/************* secret-category store ********** */
export interface SecretCategoryState {
  apiSecretCategoryList: SecretCategorys
}

/************* secret-book store ********** */
export interface SetcretBookState {
  apiSecretBook: Nullable<SecretBook>
  apiSecretBookList: SecretBooks
}
