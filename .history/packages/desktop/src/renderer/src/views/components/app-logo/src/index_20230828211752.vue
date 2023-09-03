<script lang="ts" setup>
import { useNamespace, useCssVar } from '@renderer/shared'

defineOptions({ name: 'XlAppLogo', inheritAttrs: false })

const { b, m } = useNamespace('app-logo')
const { appLogoHeight, appLogoImgWidth, appLogoImgHeight } = useCssVar()
const getClass = computed(() => {
  return [b()]
})

const logoUrl = '@renderer/assets/music.png'
const titleClass = [`${m('title')}`]
const logoTitle = ref('Password Manager')
</script>

<template>
  <div :class="getClass">
    <img :src="logoUrl" alt="logo" />
    <div :class="titleClass">{{ logoTitle }}</div>
  </div>
</template>

<style lang="scss" scope>
.#{$b-ns}-app-logo {
  display: flex;
  align-items: center;
  height: v-bind('appLogoHeight');
  cursor: pointer;
  transition: all 0.2s ease;

  & img {
    width: v-bind('appLogoImgWidth');
    height: v-bind('appLogoImgHeight');
    margin: 10px;
    display: inline-block;
    height: 32px;
    vertical-align: middle;
    transition: height 0.2s;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
    transition: all 0.5s;
    color: white;
  }
}
</style>
