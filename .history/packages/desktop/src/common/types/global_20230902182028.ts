export type Nullable<T> = T | null
export type Undefinedable<T> = T | undefined
export type Nilable<T> = T | null | undefined
export type NonNullable<T> = T extends undefined ? never : T

export type Recordable<T> = Record<string, T>
export type ReadonlyRecordable<T> = {
  readonly [key: string]: T
}

export type Indexable<T> = {
  [key: string]: T
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export type TimeoutHandle = ReturnType<typeof setTimeout>
export type IntervalHandle = ReturnType<typeof setInterval>
