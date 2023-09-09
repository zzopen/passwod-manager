<script lang="ts" setup>
import { useNamespace, useCssVar } from '@renderer/shared'
import { LOGO_TITLE } from '@common/config'

defineOptions({ name: 'AppLogo', inheritAttrs: false })

const { b, e } = useNamespace('app-logo')
const { appLogoHeight, appLogoImgWidth, appLogoImgHeight } = useCssVar()
const getClass = computed(() => {
  return [b()]
})

const logoTitle = ref(LOGO_TITLE)
const logoUrl = '/logo.png'
const titleClass = [`${e('title')}`]
const imgClass = [`${e('img')}`]
</script>

<template>
  <a-row :class="getClass" align="middle">
    <a-col class="col1">
      <img :class="imgClass" :src="logoUrl" alt="logo" />
    </a-col>
    <a-col class="col2" flex="auto">
      <div :class="titleClass">{{ logoTitle }}</div>
    </a-col>
  </a-row>
</template>

<style lang="scss" scope>
.#{$b-ns}-app-logo {
  height: v-bind('appLogoHeight');
  cursor: pointer;
  transition: all 0.2s ease;

  & .col1 {
    padding-left: 15px;
  }

  & .col2 {
    padding-left: 15px;
  }

  & __img {
    width: v-bind('appLogoImgWidth');
    height: v-bind('appLogoImgHeight');
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
    transition: all 0.5s;
    color: white;
  }
}
</style>
