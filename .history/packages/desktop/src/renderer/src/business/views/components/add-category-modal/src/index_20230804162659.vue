<script setup lang="ts">
import { listenerOpenAddCategoryModal } from '@/business/utils'
defineOptions({
  name: 'AddCategoryModal',
  inheritAttrs: false
})

const modalProps = reactive({
  open: false
})

const open = () => {
  modalProps.open = true
}

const openModal = () => {
  modalProps.open = true
}

listenerOpenAddCategoryModal()
defineExpose({
  open
})
</script>

<template>
  <div class="add-category">
    <m-modal v-bind="modalProps"> asdasdads </m-modal>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
