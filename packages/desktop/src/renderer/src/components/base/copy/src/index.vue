<script lang="ts" setup>
import { copyProps } from './props'
import { useNamespace } from '@renderer/components/_shared'
import { CopyTwoTone } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { useClipboard } from '@vueuse/core'

defineOptions({ name: 'XlBaseCopy', inheritAttrs: false })
const props = defineProps(copyProps())

const { copy, copied, isSupported } = useClipboard({ legacy: true, source: props.text })

const { b } = useNamespace('base-copy')
const getClass = computed(() => {
  return [b()]
})

const onClick = async () => {
  if (!unref(isSupported)) {
    message.warn('Your browser does not support Clipboard API')
    return
  }

  await copy(props.text)
  if (!unref(copied)) {
    message.success('复制成功!')
  } else {
    message.error('复制失败!')
  }
}
</script>

<template>
  <span :class="getClass">
    <a-tooltip title="复制">
      <copy-two-tone @click="onClick" />
    </a-tooltip>
  </span>
</template>

<style lang="scss" scoped>
.#{$ns}-base-copy {
  margin-left: 10px;
}
</style>
