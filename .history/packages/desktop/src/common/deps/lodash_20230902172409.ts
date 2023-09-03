import _ from 'lodash-es'

function isEmptyObject(obj: object) {
  if (typeof obj == 'object' && !Array.isArray(obj)) {
    for (const _ in obj) {
      return false
    }

    return true
  }

  return false
}

export const isEmpty = _.isEmpty //  // [],{},'',null,undefined,map,set
export const omit = _.omit
