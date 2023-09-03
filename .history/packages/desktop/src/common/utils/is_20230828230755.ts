const isEmptyArray = (arr: any): boolean => {
  if (Array.isArray(arr)) {
    return false
  }

  return arr.length == 0
}
