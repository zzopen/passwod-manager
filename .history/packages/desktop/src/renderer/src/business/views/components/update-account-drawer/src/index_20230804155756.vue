<script setup lang="ts">
import { UpdateAccountForm, type FormState } from '@/business/views/components/update-account-form'
import { message, listenerOpenUpdateAccountDrawer } from '@/business/utils'
import { DrawerProps } from '@/components'
import { useEventStore } from '@/stores'

defineOptions({
  name: 'UpdateAccountDrawer',
  inheritAttrs: false
})

const eventStore = useEventStore()

const open = ref<boolean>(false)
const drawerRef = ref()
const drawerProps = reactive<DrawerProps>({
  title: 'asdasd'
})
const handleClose = () => {
  open.value = false
}
const openDrawer = (p: { id: number | string }) => {
  open.value = true
  accountId.value = p.id

  // 假设从服务器获取到信息
  const res: FormState = {
    website: 'www.baidu.com',
    account: 'xl123456',
    password: '123456??'
  }

  setformState(res)
}

const accountId = ref<number | string>(0)
const updateAccountFormRef = ref()
const handleCheckSuccess = (formState: FormState) => {
  console.log('formState:', formState)
  // 此处模拟提交
  const res = true
  if (res) {
    message.success('提交成功')
    handleClose()
    resetForm()
  }
}

const setformState = (state: FormState) => {
  updateAccountFormRef.value.setFormState(state)
}
const resetForm = () => {
  updateAccountFormRef.value.resetForm()
}

listenerOpenUpdateAccountDrawer(openDrawer)
</script>

<template>
  <div class="update-account-drawer">
    <m-drawer ref="drawerRef" :open="open" v-bind="drawerProps" @close="handleClose">
      <update-account-form ref="updateAccountFormRef" @check-success="handleCheckSuccess" />
    </m-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
