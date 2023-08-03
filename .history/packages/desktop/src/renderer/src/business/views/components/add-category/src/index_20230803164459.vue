<script setup lang="ts">
defineOptions({
  name: 'AddCategory',
  inheritAttrs: false
})

const modalProps = reactive({
  open: false
})

const open = () => {
  modalProps.open = !modalProps.open
}
</script>

<template>
  <div class="add-category">
    <m-modal v-bind="modalProps"> asdasdads </m-modal>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
