import { isDev } from '@main/shared'
import { BrowserWindow, dialog, shell, app, nodePath } from '@main/shared/deps'
import { autoUpdater } from 'electron-updater'

//自动下载更新
autoUpdater.autoDownload = false
//退出时自动安装更新
// autoUpdater.autoInstallOnAppQuit = false
const releaseUrl = 'https://github.com/zzopen/zz-cipher'

export const appUpdater = async (win?: BrowserWindow) => {
  console.log('自动更新检测开始 ...')
  if (!win) {
    return
  }

  devSet()

  console.log('win:', win, autoUpdater.getFeedURL())

  autoUpdater.checkForUpdates()
  onUpdateAvailable()
  onCheckingForUpdate()
  onDownloadProgress()
  onUpdateNotAvailable()
  onUpdateDownloaded()
  onError()
}

const devSet = async () => {
  if (isDev && process.env['ELECTRON_RENDERER_URL']) {
    console.log(nodePath.join(__dirname, '../../dev-app-update.yml'))
    autoUpdater.updateConfigPath = nodePath.join(__dirname, '../../dev-app-update.yml')
  }

  if (isDev) {
    Object.defineProperty(app, 'isPackaged', {
      get() {
        return true
      }
    })
  }
}

const onUpdateAvailable = async () => {
  // 监听'update-available'事件，发现有新版本时触发
  autoUpdater.on('update-available', (_info) => {
    console.log('info:', _info)
    dialog
      .showMessageBox({
        type: 'warning',
        title: '更新提示',
        message: '有新版本发布了',
        buttons: ['更新', '取消'],
        cancelId: 1
      })
      .then((res) => {
        if (res.response == 0) {
          //开始下载更新
          autoUpdater.downloadUpdate()
        }
      })
  })
}

const onDownloadProgress = async (win?: BrowserWindow) => {
  // 监听下载进度
  autoUpdater.on('download-progress', (progress) => {
    win?.webContents.send('downloadProgress', progress)
  })
}

const onUpdateNotAvailable = async (win?: BrowserWindow) => {
  //没有新版本时
  autoUpdater.on('update-not-available', (_info: any) => {
    win?.webContents.send('version', _info.tag)
    dialog.showMessageBox({
      type: 'info',
      message: `${_info}-${JSON.stringify(_info)}`
    })
  })
}

const onUpdateDownloaded = async () => {
  // 监听'update-downloaded'事件，新版本下载完成时触发
  autoUpdater.on('update-downloaded', (_info) => {
    dialog
      .showMessageBox({
        type: 'info',
        title: '应用更新',
        message: '需要退出程序才能安装新版本，是否安装？',
        buttons: ['是', '否']
      })
      .then((buttonIndex) => {
        if (buttonIndex.response == 0) {
          // 选择是，则退出程序，安装新版本
          autoUpdater.quitAndInstall()
        }
      })
  })
}

const onError = async () => {
  //更新发生错误
  autoUpdater.on('error', (error) => {
    console.error('更新异常:', error)
    dialog
      .showMessageBox({
        type: 'warning',
        title: '更新提示',
        message: '软件更新失败',
        buttons: ['手动下载最新', '取消更新'],
        cancelId: 1
      })
      .then((res) => {
        if (res.response == 0) {
          shell.openExternal(releaseUrl)
        }
      })
  })
}

const onCheckingForUpdate = async () => {
  // 检测是否需要更新
  autoUpdater.on('checking-for-update', () => {
    console.log('正在检查更新……')
  })
}
