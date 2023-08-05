<script setup lang="ts">
import { useNamespace } from '../../shared/hooks'
import './styles'

defineOptions({ name: 'MLogin', inheritAttrs: false })

const { b } = useNamespace('login')
</script>

<template>
  <div :class="b()">login</div>
</template>
