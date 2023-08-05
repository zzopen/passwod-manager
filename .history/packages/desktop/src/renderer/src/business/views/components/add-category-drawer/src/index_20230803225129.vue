<script setup lang="ts">
import { AddCategoryForm, type FormState } from '@/business/views/components/add-category-form'
import { message } from '@/business/utils'
import { DrawerProps } from '@/components'
import { useEventStore } from '@/stores'

defineOptions({
  name: 'AddCategoryDrawer',
  inheritAttrs: false
})

const eventStore = useEventStore()
const drawerProps = reactive<DrawerProps>({
  title: 'asdasd'
})

const addCategoryFormRef = ref()
const mDrawerRef = ref()

const open = computed(() => {
  return eventStore.getAddCategoryDrawerOpen
})

const handleClose = () => {
  eventStore.hideAddCategoryDrawer()
}

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
</script>

<template>
  <div class="add-category-drawer">
    <m-drawer ref="mDrawerRef" :open="open" v-bind="drawerProps" @close="handleClose">
      <add-category-form
        ref="addCategoryFormRef"
        :form-state="formState"
        @check-success="handleCheckSuccess"
      />
    </m-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
