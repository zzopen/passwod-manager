<script lang="ts" setup>
import { useEventStore } from '@renderer/stores'
import type { AccountInfo } from './props'
import { defaultAccountInfo } from './props'
import { listenerOpenRightContentPage, listenerRefreshRightContentPage } from '@renderer/shared'
import { delay } from '@common/utils'

defineOptions({ name: 'SecretBookDetail', inheritAttrs: false })

const eventStore = useEventStore()
const handleUpdate = () => {
  eventStore.openUpdateAccountDrawer({ id: unref(accountId) })
}

const open = ref<boolean>(false)
const accountId = ref<string>(0)
let accountInfo: AccountInfo = shallowReactive({ ...defaultAccountInfo })

const setData = (data: AccountInfo) => {
  accountInfo = Object.assign(accountInfo, { ...data })
  console.log('accountInfo:', unref(accountInfo))
}

const openPage = async (p: { id: string }) => {
  await setRemoteData(p)
  open.value = true
  accountId.value = p.id
}

const setRemoteData = async (p: { id: string }) => {
  await delay(2000)
  // 假设从服务器获取到信息
  const res: AccountInfo = {
    website: 'www.baidu.com',
    account: 'xl123456',
    password: '123456??',
    email: '373045134@qq.com',
    mobile: '1881091239'
  }

  setData(res)
}

const refreshPage = async () => {
  // await setRemoteData({ id: unref(accountId) })
  // 假设从服务器获取到信息
  const res: AccountInfo = {
    website: 'www.baidu.com123',
    account: '234234',
    password: 'erwerewr??',
    email: 'sdfsdf@qq.com',
    mobile: 'cvcxvcxv'
  }

  setData(res)
}

listenerOpenRightContentPage(openPage)
listenerRefreshRightContentPage(refreshPage)
</script>

<template>
  <div v-show="open" class="right-content">
    <div>标题占位</div>
    <a-descriptions bordered title="Custom Size" :column="1">
      <template #extra>
        <a-button type="primary" @click="handleUpdate">修改</a-button>
        <a-button type="primary">删除</a-button>
      </template>
      <a-descriptions-item label="网址">{{ accountInfo.website }}</a-descriptions-item>
      <a-descriptions-item label="账号">{{ accountInfo.account }}</a-descriptions-item>
      <a-descriptions-item label="密码">{{ accountInfo.password }}</a-descriptions-item>
      <a-descriptions-item label="邮箱">{{ accountInfo.email }}</a-descriptions-item>
      <a-descriptions-item label="手机号">{{ accountInfo.mobile }}</a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
