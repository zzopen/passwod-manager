<script setup lang="ts">
import { UpdateAccountForm, type FormState } from '@/business/views/components/update-account-form'
import { listenerOpenUpdateAccountDrawer } from '@/business/utils'
import { message } from '@/business/utils'
import { DrawerProps } from '@/components'
import { useEventStore } from '@/stores'

defineOptions({
  name: 'UpdateAccountDrawer',
  inheritAttrs: false
})

const eventStore = useEventStore()
const drawerProps = reactive<DrawerProps>({
  title: 'asdasd'
})

const drawerRef = ref()
const open = computed(() => {
  return eventStore.getAddCategoryDrawerOpen
})
const handleClose = () => {
  eventStore.hideAddCategoryDrawer()
}

const updateAccountFormRef = ref()
const formState: FormState = {
  website: '123',
  account: '444',
  password: '555'
}

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

const resetForm = () => {
  addCategoryFormRef.value.resetForm()
}

const setformState = (state: FormState) => {
  addCategoryFormRef.value.setFormState(state)
}

const openDrawer = (p: { id: number | string }) => {}
listenerOpenUpdateAccountDrawer()
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
