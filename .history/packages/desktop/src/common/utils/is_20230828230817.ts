export const isEmptyArray = (arr: any): boolean => {
  if (!arr) {
    return false
  }

  if (Array.isArray(arr)) {
    return false
  }

  return arr.length == 0
}
