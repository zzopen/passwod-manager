<script lang="ts" setup>
import { inputProps } from './props'

defineOptions({ name: 'XlBaseInput', inheritAttrs: false })

const props = defineProps(inputProps())
const emits = defineEmits(['update:value'])

const inputValue = computed({
  get() {
    return props.value || ''
  },
  set(v: string) {
    emits('update:value', v)
  }
})
</script>

<template>
  <a-input v-model:value="value" :placeholder="schema.placeholder" :style="schema.style" />
</template>

<style lang="scss" scoped></style>
