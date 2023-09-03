import { PlayerStatus } from '@renderer/business/apis/typings'

/************* event store ********** */
interface EventState {}

/************* category store ********** */
interface CategoryState {
  categoryList: ZZ.API.Categorys
  categoryTreeList: ZZ.API.Categorys
}

export type { CategoryState, EventState }
