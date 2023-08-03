<template>
  <div :class="getClass">
    <img src="@/assets/music.png" alt="logo" />
    <div :class="getTitleClass">{{ logoTitle }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'

defineOptions({
  name: 'AppLogo'
})

const { nsCls } = useCls(globalCls.nsAppLogo)
const getClass = computed(() => {
  return [nsCls]
})

const logoTitle = ref('Password Manager')
const getTitleClass = computed(() => {
  return [`${nsCls}__title`]
})
</script>

<style scoped lang="scss">
.#{$ns-app-logo} {
  display: flex;
  align-items: center;
  height: $ns-app-logo-height;
  cursor: pointer;
  transition: all 0.2s ease;

  & img {
    width: $ns-app-logo-width;
    height: $ns-app-logo-width;
    margin: 5px 8px;
    display: inline-block;
    height: 32px;
    vertical-align: middle;
    transition: height 0.2s;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
    margin-left: 5px;
    transition: all 0.5s;
    color: white;
  }
}
</style>
