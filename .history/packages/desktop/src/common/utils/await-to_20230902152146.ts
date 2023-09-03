// 返回值代表 error，返回数据，flag: true代表promise执行成功，false代表失败

export interface AwaitToResponse {
  error: any
  data: any
  flag: boolean
}

export const defaultAwaitToResponse: AwaitToResponse = {
  error: undefined,
  data: undefined,
  flag: false
}

/**
 * 该方法不会抛出异常，也不会reject，通过返回值用户自行判断程序该如何进行
 * @param promiseFn
 * @param errorExt
 * @returns
 */
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
        return { error: undefined, data, flag: true }
      })
      .catch<AwaitToResponse>((error: E) => {
        if (errorExt) {
          error = Object.assign({}, error, errorExt)
        }

        return { error, data: undefined, flag: false }
      })
  } catch (error) {
    return Promise.resolve({ error, data: undefined, flag: false })
  }
}
