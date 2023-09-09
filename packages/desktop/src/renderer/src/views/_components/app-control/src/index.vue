<script lang="ts" setup>
import {
  useNamespace,
  emitOpenCreateSecretCategoryModal,
  emitOpenCreateSecretBookDrawer
} from '@renderer/shared'
import { CalendarTwoTone, BookTwoTone } from '@renderer/shared/deps'

defineOptions({ name: 'AppControl', inheritAttrs: false })

const { b } = useNamespace('app-control')
const getClass = computed(() => {
  return [b()]
})

const onClickCreateSecretCategory = () => {
  emitOpenCreateSecretCategoryModal()
}

const onClickCreateSecretBook = () => {
  emitOpenCreateSecretBookDrawer({})
}
</script>

<template>
  <div :class="getClass">
    <a-row>
      <a-col>
        <a-tooltip placement="bottomLeft" color="#f50">
          <template #title>
            <span>创建分类</span>
          </template>
          <a-button type="text" style="width: 35px" @click="onClickCreateSecretCategory">
            <template #icon>
              <calendar-two-tone style="font-size: 12px" />
            </template>
          </a-button>
        </a-tooltip>
      </a-col>
      <a-col>
        <a-tooltip placement="bottomLeft" color="#f50">
          <template #title>
            <span>创建密码记录</span>
          </template>
          <a-button type="text" style="width: 35px" @click="onClickCreateSecretBook">
            <template #icon>
              <book-two-tone style="font-size: 12px" />
            </template>
          </a-button>
        </a-tooltip>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.#{$b-ns}-app-control {
}
</style>
