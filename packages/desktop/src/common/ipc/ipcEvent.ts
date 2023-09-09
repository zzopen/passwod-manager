/**** IpcMainEvent ****/
export interface IpcMainEvent<T> {
  event: Electron.IpcMainEvent
  p: T
}

export type IpcMainEventListener<T, V> = (e: IpcMainEvent<T>) => Promise<V>

/**** IpcMainInvokeEvent ****/
export interface IpcMainInvokeEvent<T> {
  event: Electron.IpcMainInvokeEvent
  p: T
}

export type IpcMainInvokeEventListener<T, V> = (e: IpcMainInvokeEvent<T>) => Promise<V>

export interface IpcRendererEvent<T> {
  event: Electron.IpcRendererEvent
  p: T
}

export type IpcRendererEventListener<T> = (params: IpcRendererEvent<T>) => any
