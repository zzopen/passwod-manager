<script lang="ts" setup>
import { consoleLog, emitOpenExportDataModal } from '@renderer/shared'
import {
  SyncOutlined,
  ToolOutlined,
  ExportOutlined,
  HomeOutlined,
  LogoutOutlined,
  ImportOutlined,
  InfoCircleOutlined,
  BookOutlined,
  ControlOutlined
} from '@renderer/shared/deps'

defineOptions({ name: 'AppAboutMenu', inheritAttrs: false })
const emits = defineEmits(['click'])

const onClickLogout = async () => {
  consoleLog('onClickLogout', '正在退出')
  emitClickMenu()
  await window.preloadContext.mix.appQuit()
}

const onClickSwitchDevTools = async () => {
  consoleLog('onClickSwitchDevTools', '切换开发者工具')
  emitClickMenu()
  await window.preloadContext.mix.switchDevTools()
}

const onClickImportData = async () => {
  consoleLog('onClickImportData', '导入数据')
  emitClickMenu()
  await window.preloadContext.mix.importData()
}

const onClickExportData = async () => {
  consoleLog('onClickExportData', '导出数据')
  emitClickMenu()
  emitOpenExportDataModal()
}

const onClickCheckUpdater = async () => {
  consoleLog('onClickCheckUpdater', '检查更新')
  emitClickMenu()
  window.preloadContext.mix.appCheckUpdater()
}

const emitClickMenu = () => {
  emits('click')
}
</script>

<template>
  <a-menu>
    <a-menu-item key="about">
      <template #icon> <info-circle-outlined /></template>
      <a href="javascript:;">关于</a>
    </a-menu-item>
    <a-menu-divider></a-menu-divider>
    <a-menu-item key="check-updater" @click="onClickCheckUpdater">
      <template #icon><sync-outlined /></template>
      <a href="javascript:;">检查更新</a>
    </a-menu-item>
    <a-menu-item key="feedback">
      <template #icon><book-outlined /> </template>
      <a href="javascript:;">意见反馈</a>
    </a-menu-item>
    <a-menu-item key="home">
      <template #icon><home-outlined /></template>
      <a href="javascript:;">主页</a>
    </a-menu-item>
    <a-menu-divider></a-menu-divider>
    <a-menu-item key="import" @click="onClickImportData">
      <template #icon><import-outlined /></template>
      <a href="javascript:;">导入</a>
    </a-menu-item>
    <a-menu-item key="export" @click="onClickExportData">
      <template #icon><export-outlined /></template>
      <a href="javascript:;">导出</a>
    </a-menu-item>
    <a-menu-divider></a-menu-divider>
    <a-menu-item key="options">
      <template #icon><control-outlined /></template>
      <a href="javascript:;">选项</a>
    </a-menu-item>
    <a-menu-item key="devTools" @click="onClickSwitchDevTools">
      <template #icon><tool-outlined /></template>
      <a href="javascript:;">切换开发者工具</a>
    </a-menu-item>
    <a-menu-divider></a-menu-divider>
    <a-menu-item key="logout" @click="onClickLogout">
      <template #icon> <logout-outlined /></template>
      <div>退出</div>
    </a-menu-item>
  </a-menu>
</template>

<style lang="scss" scoped>
.app-about-menu {
}
</style>
