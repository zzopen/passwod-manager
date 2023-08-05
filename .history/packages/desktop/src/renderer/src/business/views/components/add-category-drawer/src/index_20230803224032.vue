<script setup lang="ts">
import { AddCategoryForm, type FormState } from '@/business/views/components/add-category-form'
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
}
</script>

<template>
  <div class="add-category-drawer">
    <m-drawer ref="drawerRef" :open="open" v-bind="drawerProps" @close="handleClose">
      <add-category-form
        ref="addCategoryForm"
        :form-state="formState"
        @check-success="handleCheckSuccess"
      />
    </m-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
