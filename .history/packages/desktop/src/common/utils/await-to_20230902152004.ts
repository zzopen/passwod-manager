// 返回值代表 error，返回数据，flag: true代表promise执行成功，false代表失败

export interface AwaitToResponse {
  err: any
  data: any
  flag: boolean
}

export const defaultAwaitToResponse: AwaitToResponse = {
  err: undefined,
  data: undefined,
  flag: false
}

export function awaitTo<T, E = Error>(
  promiseFn: Promise<T>,
  errorExt?: object
): Promise<AwaitToResponse> {
  if (!promiseFn) {
    return Promise.resolve({ ...defaultAwaitToResponse })
  }

  try {
    return promiseFn
      .then<AwaitToResponse>((data: T) => {
        return { err: undefined, data, flag: true }
      })
      .catch<AwaitToResponse>((err: E) => {
        if (errorExt) {
          err = Object.assign({}, err, errorExt)
        }

        return { err, data: undefined, flag: false }
      })
  } catch (error) {
    return Promise.resolve([])
  }
}
