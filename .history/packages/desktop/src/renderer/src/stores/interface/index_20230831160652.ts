/************* event store ********** */
export interface EventState {}

/************* request store ********** */
export interface RequestState {}

/************* secret-category store ********** */
export interface SecretCategoryState {
  apiSecretCategoryList: ZZ.API.SecretCategorys
}

/************* secret-book store ********** */
export interface SetcretBookState {
  secretBookId: string
  apiSecretBook: ZZ.API.SecretBook
  apiSecretBookList: ZZ.API.SecretBooks
  secretBookList: ZZ.API.SecretBooks
  updateSecretBookId: string
}
