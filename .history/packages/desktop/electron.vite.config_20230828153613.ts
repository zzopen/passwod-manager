import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

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
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        },
        scss: {
          additionalData: '@import "@renderer/styles/index.scss";'
        }
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
    ],
    optimizeDeps: {
      include: ['vue', 'ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US']
    }
  }
})
