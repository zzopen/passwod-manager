import { contextBridge, nodeProcess } from '@preload/shared/deps'
import { preloadContext } from './preload'

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (nodeProcess.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('preloadContext', preloadContext)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.preloadContext = preloadContext
}
