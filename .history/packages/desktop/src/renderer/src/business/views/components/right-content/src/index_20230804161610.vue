<script setup lang="ts">
import { useEventStore } from '@/stores'
import type { AccountInfo } from './props'
import { defaultAccountInfo } from './props'
import {
  listenerOpenRightContentPage,
  listenerRefreshRightContentPage,
  type UnwrapRef
} from '@/business/utils'

defineOptions({
  name: 'RightContent',
  inheritAttrs: false
})

const eventStore = useEventStore()
const handleUpdate = () => {
  eventStore.openUpdateAccountDrawer({ id: accountId.value })
}

const open = ref<boolean>(false)
const accountId = ref<number | string>(0)
let accountInfo: AccountInfo = shallowReactive({ ...defaultAccountInfo })

const setData = (data: AccountInfo) => {
  accountInfo = Object.assign(accountInfo, { ...data })
  console.log('accountInfo:', unref(accountInfo))
}

const openPage = (p: { id: number | string }) => {
  open.value = true
  accountId.value = p.id
  setRemoteData(p)
}

const setRemoteData = (p: { id: number | string }) => {
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

const refreshPage = () => {
  setRemoteData({ id: accountId })
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
