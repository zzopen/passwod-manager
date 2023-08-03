<script setup lang="ts">
defineOptions({
  name: 'AddCategory',
  inheritAttrs: false
})

const open = ref<boolean>(false)

const showModal = () => {
  open.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e)
  open.value = false
}
</script>

<template>
  <div class="add-category">
    <m-modal> asdasdads </m-modal>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
