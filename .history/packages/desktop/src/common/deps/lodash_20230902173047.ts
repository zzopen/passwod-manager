import { cloneDeep } from 'lodash-es'

function isEmptyObject(obj: object) {
  if (typeof obj == 'object' && !Array.isArray(obj)) {
    for (const _ in obj) {
      return false
    }

    return true
  }

  return false
}

export const appisEmpty = _.isEmpty //  // [],{},'',null,undefined,map,set
export const omit = _.omit
