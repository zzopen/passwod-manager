import type { Nullable, SecretBook, SecretBooks, SecretCategorys } from '@common/types'
/************* event store ********** */

/************* request store ********** */

/************* secret-category store ********** */

/************* secret-book store ********** */
export interface SetcretBookState {
  apiSecretBook: Nullable<SecretBook>
  apiSecretBookList: SecretBooks
}
