<script lang="ts" setup>
import {
  SecretBookUpdateForm,
  type FormState
} from '@renderer/views/_components/secret-book/secret-book-update-form'
import { message } from '@renderer/shared'

import type { DrawerProps } from '@renderer/components'
import { useRequestStore, useSecretBookStore } from '@renderer/stores'

defineOptions({ name: 'SecretBookUpdateDrawer', inheritAttrs: false })

const requestStore = useRequestStore()
const secretBookStore = useSecretBookStore()

const drawerProps = shallowRef<DrawerProps>({
  title: '标题',
  open: false
})

watch(
  () => secretBookStore.updateSecretBookId,
  (newVal) => {
    if (!newVal || newVal == '') {
      drawerProps.value.open = false
    } else {
    }
  }
)

const handleClose = () => {
  drawerProps.value.open = false
}
const openDrawer = (p: { id: string }) => {
  drawerProps.value.open = true
  accountId.value = p.id

  // 假设从服务器获取到信息
  const res: FormState = {
    website: 'www.baidu.com',
    account: 'xl123456',
    password: '123456??'
  }

  setformState(res)
}

const accountId = ref<string>(0)
const updateAccountFormRef = ref()
const handleCheckSuccess = (formState: FormState) => {
  console.log('formState:', formState)
  // 此处模拟提交
  const res = true
  if (res) {
    message.success('提交成功')
    handleClose()
    resetForm()
    eventStore.refreshRightContentPage()
  }
}

const setformState = async (state: FormState) => {
  await nextTick()
  updateAccountFormRef.value.setFormState(state)
}
const resetForm = () => {
  updateAccountFormRef.value.resetForm()
}
</script>

<template>
  <div class="update-account-drawer">
    <xl-base-drawer v-bind="drawerProps" @close="handleClose">
      <secret-book-update-form ref="updateAccountFormRef" @check-success="handleCheckSuccess" />
    </xl-base-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
