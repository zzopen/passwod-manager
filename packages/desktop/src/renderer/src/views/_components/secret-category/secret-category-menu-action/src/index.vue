<script lang="ts" setup>
defineOptions({ name: 'SecretCategoryMenuAction', inheritAttrs: false })

// const btnStyles: CSSProperties = {
//   width: '20px',
//   height: '20px'
// }

// const buttonProps = computed((): ButtonProps => {
//   return {
//     type: 'primary',
//     size: 'small',
//     shape: 'default',
//     icon: h(PlusOutlined)
//   }
// })
</script>

<template>
  <div class="secret-category-menu-action">
    <div><span>类别</span></div>
    <!-- <div>
      <a-button :style="btnStyles" v-bind="buttonProps" @click="onClick" />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.secret-category-menu-action {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
