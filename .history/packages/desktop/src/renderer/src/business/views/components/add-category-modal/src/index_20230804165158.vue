<script setup lang="ts">
import { listenerOpenAddCategoryModal } from '@/business/utils'
import AddCategoryForm from '@/business/views/components/add-category-form'

defineOptions({
  name: 'AddCategoryModal',
  inheritAttrs: false
})

const openRef = ref<boolean>(false)

const open = () => {
  openRef.value = true
}

const openModal = () => {
  open()
}

const onCancel = () => {}

const onOk = () => {
  message.info('创建成功')
}

listenerOpenAddCategoryModal(openModal)
defineExpose({
  open
})
</script>

<template>
  <div class="add-category">
    <m-modal v-model:open="openRef" @cancel="onCancel" @ok="onOk">
      <add-category-form />
    </m-modal>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
import { message } from 'ant-design-vue';
</style>
