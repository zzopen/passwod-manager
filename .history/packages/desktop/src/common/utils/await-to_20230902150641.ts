export function awaitTo<T, U = Error>(promiseFn: Promise<T>, errorExt?: object): Promise<[]> {
  if (!promiseFn) {
    return Promise.resolve([])
  }

  try {
    return promiseFn
      .then<[null, T]>((data: T) => [null, data])
      .catch<[U, undefined]>((err: U) => {
        if (errorExt) {
          const parsedError = Object.assign({}, err, errorExt)
          return [parsedError, undefined]
        }

        return [err, undefined]
      })
  } catch (error) {
    return Promise.resolve([])
  }
}
