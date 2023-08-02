import { app } from 'electron'
import { join, dirname, resolve } from 'node:path'
import process from 'node:process'
import { ensureDir } from 'fs-extra'
import { isWin, isDev, consoleLog, shareState, getSqliteFilePath } from '@main/utils'
import { USER_DATA_DIR_NAME, USER_DB_DIR_NAME, USER_DEFAULT_DB_NAME } from '@common/configs'

async function init() {
  consoleLog('global-data', '触发')
  initShareState()
  _log()
}

async function initShareState() {
  process.env.DIST = join(__dirname, '../dist')
  process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, '../public')

  shareState.isDev = isDev
  shareState.appDataDirPath = app.getPath('appData')
  shareState.userDataDirPath = app.getPath('userData')
  shareState.exeDirPath = dirname(app.getPath('exe'))

  let configDirPath = ''
  if (isWin) {
    configDirPath = shareState.exeDirPath
  } else {
    configDirPath = shareState.userDataDirPath
  }

  if (isDev) {
    configDirPath = resolve('/Users/xulei/Downloads')
  }

  shareState.configDirPath = configDirPath
  shareState.dataDirPath = join(configDirPath, `/${USER_DATA_DIR_NAME}`)
  shareState.backend.sqliteDbName = USER_DEFAULT_DB_NAME
  shareState.backend.sqliteDirPath = USER_DB_DIR_NAME
  shareState.backend.sqliteDbFilePath = getSqliteFilePath()

  const options = { mode: 0o2755 }
  await ensureDir(shareState.dataDirPath, options)
  await ensureDir(shareState.backend.sqliteDirPath, options)

  global.shareState = shareState
}

async function getAvailablePort() {}

function _log() {
  consoleLog('shareState', global.shareState)
}

export { init as initGlobalData }
