<script lang="ts" setup>
import { useNamespace } from '../../../shared'

defineOptions({ name: 'MAppLogo', inheritAttrs: false })

const { b } = useNamespace('app-logo')
const getClass = computed(() => {
  return [b()]
})

const logoTitle = ref('Password Manager')
const getTitleClass = computed(() => {
  return [`${b()}__title`]
})
</script>

<template>
  <div :class="getClass">
    <img src="@renderer/assets/music.png" alt="logo" />
    <div :class="getTitleClass">{{ logoTitle }}</div>
  </div>
</template>

<script lang="scss" scope>
@import '../../../shared/styles/index.scss';

.#{$ns}-app-logo {
  display: flex;
  align-items: center;
  height: $ns-app-logo-height;
  cursor: pointer;
  transition: all 0.2s ease;

  & img {
    width: $ns-app-logo-width;
    height: $ns-app-logo-width;
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

</script>
