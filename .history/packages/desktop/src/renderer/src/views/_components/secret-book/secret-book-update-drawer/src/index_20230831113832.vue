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

const openDrawerRef = ref(false)

watch(
  () => secretBookStore.updateSecretBookId,
  (newVal) => {
    console.log('newVal:', newVal)
    if (!newVal || newVal == '') {
      openDrawerRef.value = false
    } else {
      const res = requestStore.getSecretBookDetail({ id: newVal })
      if (!res) {
        return
      }

      openDrawerRef.value = true
    }
  }
)
</script>

<template>
  <div class="update-account-drawer">
    <xl-base-drawer v-model:open="openDrawerRef" title="标题">
      <secret-book-update-form ref="updateAccountFormRef" />
    </xl-base-drawer>
  </div>
</template>

<style lang="scss" scoped></style>
