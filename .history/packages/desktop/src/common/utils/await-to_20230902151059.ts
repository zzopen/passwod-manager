// 返回值代表 error，返回数据，flag: true代表promise执行成功，false代表失败
export function awaitTo<T, U = Error>(
  promiseFn: Promise,
  errorExt?: object
): Promise<[any, any, boolean]> {
  if (!promiseFn) {
    return Promise.resolve([null, null, false])
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
