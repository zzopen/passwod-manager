import { cloneDeep, omit } from 'lodash'

export const lodashFn = {
  cloneDeep,
  omit
}

// export function isEmptyObject(obj: object) {
//   if (typeof obj == 'object' && !Array.isArray(obj)) {
//     for (const _ in obj) {
//       return false
//     }

//     return true
//   }

//   return false
// }
