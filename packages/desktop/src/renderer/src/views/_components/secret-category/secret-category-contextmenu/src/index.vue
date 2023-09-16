<script lang="ts" setup>
import {
  useNamespace,
  listenerOpenSecretCategoryMenuContextmenu,
  emitRefreshHomePage,
  emitOpenUpdateSecretCategoryModal
} from '@renderer/shared'
import { vOnClickOutside, Modal, ExclamationCircleOutlined, message } from '@renderer/shared/deps'
import { useRequestStore } from '@renderer/stores'

defineOptions({ name: 'SecretCategoryContextmenu', inheritAttrs: false })
const requestStore = useRequestStore()
const { b } = useNamespace('secret-category-contextmenu')
const getClass = computed(() => {
  return [b()]
})

const state = reactive<{
  open: boolean
  secret_category_id: string
  secret_category_name: string
  x: number
  y: number
}>({
  open: false,
  secret_category_id: '',
  secret_category_name: '',
  x: 500,
  y: 200
})

const reset = () => {
  state.secret_category_id = ''
  state.secret_category_name = ''
  state.x = 0
  state.y = 0
  close()
}

const close = () => {
  state.open = false
}

const onClickUpdate = () => {
  emitOpenUpdateSecretCategoryModal({ secret_category_id: state.secret_category_id })
  reset()
}

const onClickDelete = () => {
  close()
  Modal.confirm({
    title: `确认要删除分类"${state.secret_category_name}"吗？`,
    icon: h(ExclamationCircleOutlined),
    content: h('div', { style: 'color:red;' }, '请谨慎选择'),
    cancelText: '取消',
    keyboard: false,
    okButtonProps: { danger: true },
    okText: '删除',
    async onOk() {
      const res = await requestStore.deleteSecretCategory({ id: state.secret_category_id })
      if (!res) {
        message.error('删除失败')
        return Promise.reject('删除失败')
      } else {
        message.success('删除成功')
        emitRefreshHomePage()
        reset()
      }
    },
    async onCancel() {
      reset()
    }
  })
}

const menuStyle = computed(() => {
  return {
    width: '120px',
    position: 'absolute',
    left: `${state.x}px`,
    top: `${state.y}px`
  }
})

const ready = (p: {
  x: number
  y: number
  secret_category_id: string
  secret_category_name: string
}) => {
  state.secret_category_id = p.secret_category_id
  state.secret_category_name = p.secret_category_name
  state.x = p.x
  state.y = p.y
  state.open = true
}

listenerOpenSecretCategoryMenuContextmenu(ready)
</script>

<template>
  <div :class="getClass">
    <a-menu v-if="state.open" v-on-click-outside="reset" :style="menuStyle" theme="light">
      <a-menu-item key="update" @click="onClickUpdate">
        <span>编辑</span>
      </a-menu-item>
      <a-menu-item key="delete" @click="onClickDelete">
        <span>删除</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<style lang="scss" scoped>
.#{$b-ns}-secret-category-contextmenu {
}
</style>
