<script lang="ts" setup>
import { useNamespace } from '@renderer/shared'
import { SettingTwoTone } from '@renderer/shared/deps'
import AppAboutMenu from '@renderer/views/_components/app-about-menu'

defineOptions({ name: 'AppAbout', inheritAttrs: false })

const { b } = useNamespace('app-about')
const getClass = computed(() => {
  return [b()]
})
</script>

<template>
  <div :class="getClass">
    <a-row>
      <a-col>
        <a-dropdown trigger="click" :arrow="{ pointAtCenter: true }" placement="bottomRight">
          <a-button type="text" style="width: 35px" @click.prevent>
            <template #icon>
              <setting-two-tone style="font-size: 12px" />
            </template>
          </a-button>
          <template #overlay>
            <app-about-menu />
          </template>
        </a-dropdown>
      </a-col>
      <a-col><div style="width: 15px"></div></a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.#{$b-ns}-app-about {
}
</style>
