<script setup lang="ts">
import { listenerOpenAddCategoryModal } from '@/business/utils'
defineOptions({
  name: 'AddCategoryModal',
  inheritAttrs: false
})

const openRef = ref<boolean>(false)

const openFn = () => {
  openRef.value = true
}

const openModalFn = () => {
  openFn()
}

listenerOpenAddCategoryModal(openModal)
defineExpose({
  open
})
</script>

<template>
  <div class="add-category">
    <m-modal v-model:open="openRef"> asdasdads </m-modal>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
