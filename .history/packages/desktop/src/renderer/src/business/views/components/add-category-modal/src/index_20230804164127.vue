<script setup lang="ts">
import { listenerOpenAddCategoryModal } from '@/business/utils'
defineOptions({
  name: 'AddCategoryModal',
  inheritAttrs: false
})

const openRef = ref<boolean>(false)
const modalProps = reactive({
  open: false
})

const open = () => {
  modalProps.open = true
}

const openModal = () => {
  open()
}

listenerOpenAddCategoryModal(openModal)
defineExpose({
  open
})
</script>

<template>
  <div class="add-category">
    <m-modal v-model="openRef" v-bind="modalProps"> asdasdads </m-modal>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
