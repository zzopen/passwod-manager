<script lang="ts" setup>
import {
  SecretBookUpdateForm,
  type FormState
} from '@renderer/views/_components/secret-book/secret-book-update-form'
import { message } from '@renderer/shared'

import type { DrawerProps } from '@renderer/components'
import { useRequestStore, useSecretBookStore } from '@renderer/stores'

defineOptions({ name: 'SecretBookUpdateDrawer', inheritAttrs: false })

const requestStore = useRequestStore()
const secretBookStore = useSecretBookStore()

const drawerProps = shallowRef<DrawerProps>({
  title: '标题',
  open: false
})

watch(
  () => secretBookStore.updateSecretBookId,
  (newVal) => {
    if (!newVal || newVal == '') {
      drawerProps.value.open = false
    } else {
      const res = requestStore.getSecretBookDetail({ id: newVal })
      if (!res) {
        return
      }
    }
  }
)
</script>

<template>
  <div class="update-account-drawer">
    <xl-base-drawer v-model:value="openDrawerRef" @close="handleClose">
      <secret-book-update-form ref="updateAccountFormRef" @check-success="handleCheckSuccess" />
    </xl-base-drawer>
  </div>
</template>

<style lang="scss" scoped></style>
