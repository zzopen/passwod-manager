import { resolve } from 'node:path'
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function awaitTo<T, U = Error>(
  promiseFn: Promise<T>,
  errorExt?: object
): Promise<[U, undefined] | [null, T]> {
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
