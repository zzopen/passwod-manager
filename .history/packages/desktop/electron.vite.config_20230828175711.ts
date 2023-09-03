import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      Components({
        dts: resolve('src/renderer/src/plugin-components.d.ts'),
        dirs: [], // 不能删除
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: resolve('src/renderer/src/auto-import.d.ts')
      }),
      Unocss()
    ]
  }
})
