import { electronAPI, type ElectronAPI } from '@preload/shared/deps'
import { exampleRenderService, mixRenderService } from '@preload/service'
import type { ExampleRenderService, MixRenderService } from '@preload/service'

export interface PreloadContext {
  electron: ElectronAPI
  example: ExampleRenderService
  mix: MixRenderService
}

// Custom APIs for renderer
export const preloadContext = {
  electron: electronAPI,
  example: exampleRenderService,
  mix: mixRenderService
}
