import { cloneDeep, omit } from 'lodash-es'

export const lodashFn = {
  cloneDeep
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
